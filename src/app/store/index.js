import { configureStore } from '@reduxjs/toolkit';
import recognizerReducer from './reducer/recognizer';

export default configureStore({
  reducer: {
    recognizer: recognizerReducer,
  },
});
