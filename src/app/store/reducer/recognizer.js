/* eslint-disable no-param-reassign */

import { Timer } from 'easytimer.js';
import { createSlice } from '@reduxjs/toolkit';

// Create a single global timer for the recognizer
export const timer = new Timer();

const blankExpressionData = () => ({
  angry: 0,
  disgusted: 0,
  fearful: 0,
  happy: 0,
  neutral: 0,
  sad: 0,
  surprised: 0,
});

export const recognizerSlice = createSlice({
  name: 'recognizer',

  initialState: {
    isCamActive: false,
    status: 'stopped',
    time: '00:00:00',
    data: {
      count: 0,
      exprs: blankExpressionData(),
    },
  },

  reducers: {
    toggleCam: (state) => {
      state.isCamActive = !state.isCamActive;
    },

    start: (state) => {
      if (state.status === 'stopped') {
        state.time = '00:00:00';
        state.data = {
          count: 0,
          exprs: blankExpressionData(),
        };
      }
      timer.start();
      state.status = 'running';
    },

    pause: (state) => {
      timer.pause();
      state.status = 'paused';
    },

    stop: (state) => {
      timer.stop();
      state.status = 'stopped';
    },

    updateData: (state, action) => {
      // calculate the new average for each
      // listed expressions
      state.data.count += 1;
      for (const [expr, val] of Object.entries(action.payload)) {
        const old = state.data.exprs[expr];
        state.data.exprs[expr] =
            old + (val - old) / state.data.count;
      }
    },

    updateTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const {
  pause,
  start,
  stop,
  toggleCam,
  updateData,
  updateTime,
} = recognizerSlice.actions;

export default recognizerSlice.reducer;
