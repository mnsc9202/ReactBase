import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { IconButton } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { setGoogleToken } from "../utills/googleUtill";

export default function CustomGoogleLogoutBtn() {
  const navigate = useNavigate();

  /*----- gapi 방법 -----*/
  // 로그아웃 성공
  // const onLogoutSuccess = useCallback(() => {
  //   setGoogleToken("");
  //   navigate("/", { replace: true });
  // }, [navigate]);

  /*----- gsi 방법 -----*/
  // 로그아웃 성공
  const onLogoutSuccess = useCallback(() => {
    setGoogleToken("");
    navigate("/", { replace: true });
    window.google.accounts.id.disableAutoSelect();
  }, [navigate]);

  return (
    <IconButton onClick={onLogoutSuccess} size="medium">
      <PowerSettingsNewIcon />
    </IconButton>
  );
}
