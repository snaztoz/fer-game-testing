/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const recognizerSlice = createSlice({
  name: 'recognizer',

  initialState: {
    status: 'stopped',
  },

  reducers: {
    start: (state) => {
      state.status = 'running';
    },
    pause: (state) => {
      state.status = 'paused';
    },
    stop: (state) => {
      state.status = 'stopped';
    },
  },
});

export const { start, pause, stop } = recognizerSlice.actions;

export default recognizerSlice.reducer;
