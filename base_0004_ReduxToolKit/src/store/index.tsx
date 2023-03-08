import { configureStore } from "@reduxjs/toolkit";
import { userInfo } from "./userInfo";
import logger from "redux-logger";

// store 등록
export default configureStore({
  reducer: {
    userInfo: userInfo.reducer,
  },
  middleware: [logger],
});
