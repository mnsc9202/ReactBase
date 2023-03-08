import { Box, Button } from "@mui/material";
import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { userInfoType } from "../types/type";
import * as userInfoStore from "../store/userInfo";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../components/customTextField";

export default function LoginPage() {
  /* ----- info -----*/
  const disPatch: Dispatch<AnyAction> = useDispatch();
  const navigate = useNavigate();

  // 입력창 초기값
  const initInputValue: userInfoType = {
    name: "",
    email: "",
  };
  const [inputValue, setInputValue] = useState<userInfoType>(initInputValue); // 입력값

  /* ----- func -----*/
  // 입력창 내용 변경시
  const onInputValueChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue({ ...inputValue, [event.target.name]: event.target.value });
    },
    [inputValue]
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        bgcolor: "#FCFFB2",
      }}
    >
      <Box sx={{ mt: 1, mb: 1 }}>LoginPage</Box>

      <CustomTextField type="name" onInputValueChange={onInputValueChange} />
      <CustomTextField type="email" onInputValueChange={onInputValueChange} />
      <Button
        onClick={() => {
          disPatch(userInfoStore.setInfo(inputValue));
          navigate("/main");
        }}
        sx={{ width: 200, bgcolor: "#AF0171", color: "#fff" }}
      >
        저장
      </Button>
    </Box>
  );
}
