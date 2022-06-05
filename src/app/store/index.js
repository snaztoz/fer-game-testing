import { configureStore } from '@reduxjs/toolkit';

import logReducer from './reducer/log';
import recognizerReducer, { timer, updateTime } from './reducer/recognizer';

const store = configureStore({
  reducer: {
    log: logReducer,
    recognizer: recognizerReducer,
  },
});

//
// Side-effects
//

timer.addEventListener('secondsUpdated', () => {
  store.dispatch(updateTime(timer.getTimeValues().toString()));
});

export default store;
