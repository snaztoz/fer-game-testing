import React, { useEffect, useRef, useState } from 'react';
import WebcamExt from 'react-webcam';
import * as faceapi from 'face-api.js';
import { useDispatch, useSelector } from 'react-redux';

import { updateData } from '../store/reducer/recognizer';

const INTERVAL_DURATION = 500;

export default function Webcam() {
  const isRecording = useSelector((state) => state.recognizer.status) == 'running';
  const [modelsReady, setModelsReady] = useState(false);
  const dispatch = useDispatch();

  const webcamRef = useRef(null);

  // load models once
  useEffect(() => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
    ]).then(() => {
      setModelsReady(true);
    });
  }, []);

  useEffect(() => {
    if (modelsReady && isRecording) {
      // expression detection loop
      const loop = setInterval(() => {
        faceapi
          .detectSingleFace(
            webcamRef.current.video,
            new faceapi.TinyFaceDetectorOptions(),
          )
          .withFaceLandmarks()
          .withFaceExpressions()
          .then((detection) => {
            if (detection) {
              // the detection instance must be converted to
              // plain object first
              const {...plainDetection} = detection.expressions;
              dispatch(updateData(plainDetection));
            }
          });
      }, INTERVAL_DURATION);

      return () => {
        clearInterval(loop);
      }
    }
  }, [modelsReady, isRecording]);

  return (
    <WebcamExt ref={webcamRef} />
  );
}
