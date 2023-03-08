import { createSlice } from "@reduxjs/toolkit";
import { userInfoType } from "../types/type";

const initialState: userInfoType = { name: "", email: "" };

// state 생성
export const userInfo = createSlice({
  name: "userInfo",
  initialState: initialState,
  reducers: {
    setName(state, action) {
      return { ...state, name: action.payload };
    },
    setEmail(state, action) {
      return { ...state, email: action.payload };
    },
    setInfo(state, action) {
      return action.payload;
    },
    initial() {
      return initialState;
    },
  },
});

// action 생성
export const { setName, setEmail, setInfo, initial } = userInfo.actions;
export const selectUserInfo = (state: { userInfo: userInfoType }) =>
  state.userInfo;
