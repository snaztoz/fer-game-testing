import { configureStore } from '@reduxjs/toolkit';

import recognizerReducer, { timer, updateTime } from './reducer/recognizer';

const store = configureStore({
  reducer: {
    recognizer: recognizerReducer,
  },
});

timer.addEventListener('secondsUpdated', () => {
  store.dispatch(updateTime(timer.getTimeValues().toString()));
});

export default store;
