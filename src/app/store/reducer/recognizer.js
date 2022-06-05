/* eslint-disable no-param-reassign */

import { Timer } from 'easytimer.js';
import { createSlice } from '@reduxjs/toolkit';

// Create a single global timer for the recognizer
export const timer = new Timer();

export const recognizerSlice = createSlice({
  name: 'recognizer',

  initialState: {
    status: 'stopped',
    time: '00:00:00',
  },

  reducers: {
    start: (state) => {
      if (state.status === 'stopped') {
        state.time = '00:00:00';
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

    updateTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const {
  start,
  pause,
  stop,
  updateTime,
} = recognizerSlice.actions;

export default recognizerSlice.reducer;
