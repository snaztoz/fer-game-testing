/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

export const logSlice = createSlice({
  name: 'log',

  initialState: {
    buffer: [],
  },

  reducers: {
    log: ((id = 0) => (state, action) => {
      const timestamp = new Date()
        .toLocaleString('en-GB', { timeZone: 'UTC' });

      state.buffer.push({
        id,
        timestamp,
        message: action.payload,
      });

      id += 1; // eslint-disable no-param-reassign
    })(),
  },
});

export const { log } = logSlice.actions;

export default logSlice.reducer;
