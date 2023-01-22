import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "pages/counter/counter.slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
