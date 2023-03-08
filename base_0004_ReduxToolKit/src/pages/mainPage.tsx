import { Box } from "@mui/material";

import { useSelector } from "react-redux";
import * as userInfoStore from "../store/userInfo";
import { userInfoType } from "../types/type";

export default function MainPage() {
  /* ----- info -----*/
  const userInfo: userInfoType = useSelector(userInfoStore.selectUserInfo); // store에 저장된 사용자 정보

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          bgcolor: "#256D85",
          color: "#DFF6FF",
        }}
      >
        <Box sx={{ mt: 1, mb: 1 }}>MainPage</Box>
        <Box
          sx={{
            textAlign: "left",
            width: 300,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          <Box>name: {userInfo.name}</Box>
          <Box>email: {userInfo.email}</Box>
        </Box>
      </Box>
    </>
  );
}
