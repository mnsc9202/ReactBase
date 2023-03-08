import { useCallback } from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { googleClientId, setGoogleToken } from "../utills/googleUtill";

export default function GoogleLogoutBtn() {
  const navigate = useNavigate();

  // 로그아웃 성공
  const onLogoutSuccess = useCallback(() => {
    setGoogleToken("");
    navigate("/", { replace: true });
  }, [navigate]);

  // 로그아웃 실패
  const onFailure = useCallback(() => {
    console.log(`로그아웃 실패`);
  }, []);

  return (
    <GoogleLogout
      clientId={googleClientId}
      buttonText="로그아웃"
      icon={true}
      onLogoutSuccess={onLogoutSuccess}
      onFailure={onFailure}
    />
  );
}
