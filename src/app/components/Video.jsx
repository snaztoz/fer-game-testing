import React, { useEffect } from 'react';
import Webcam from 'react-webcam';
import { BsFillPersonFill } from 'react-icons/bs';
import { Center, Icon } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import * as faceapi from 'face-api.js';

export default function Video() {
  const isCamActive = useSelector((state) => state.recognizer.isCamActive);

  const videoRef = React.useRef();

  const startVideo = () => {
    if (isCamActive) {
      // eslint-disable-next-line no-return-assign
      navigator.getUserMedia({ video: {} }, (stream) => videoRef.current.srcObject = stream);
    }
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = './public/models';
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
      ]).then(startVideo);
    };
    loadModels();
  });

  const handleVideoOnPlay = () => {
    setInterval(async () => {
      // eslint-disable-next-line max-len
      const detection = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      console.log(detection);
    }, 1000);
  };

  return (
    <Center bg="gray.900" h="100%" w="100%">
      {isCamActive
        ? <Webcam id="video" width="70%" ref={videoRef} onPlay={handleVideoOnPlay} />
        : (
          <Icon
            as={BsFillPersonFill}
            color="teal"
            h="25%"
            w="25%"
          />
        )}
    </Center>
  );
}
