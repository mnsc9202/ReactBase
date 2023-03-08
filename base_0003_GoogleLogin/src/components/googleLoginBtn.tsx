/*----- gapi 방법 -----*/
// import { gapi } from "gapi-script";
// import { useCallback, useEffect } from "react";
// import GoogleLogin, {
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
// } from "react-google-login";
// import { useNavigate } from "react-router-dom";
// import { googleClientId, setGoogleToken } from "../utills/googleUtill";

// export default function GoogleLoginBtn() {
//   // navi
//   const navigate = useNavigate();

//   // 인터페이스 확인 (GoogleLoginResponseOffline)
//   const checkGoogleLoginResponseOffline = useCallback(
//     (obj: any): obj is GoogleLoginResponseOffline => {
//       return "code" in obj;
//     },
//     []
//   );

//   // 로그인 인증
//   const googleAuth2 = useCallback(() => {
//     gapi.client.init({
//       clientId: googleClientId,
//       scope: "",
//     });
//   }, []);

//   // 로그인 인증관련 처리
//   useEffect(() => {
//     gapi.load("client:auth2", googleAuth2);
//   }, [googleAuth2]);

//   // 로그인 성공
//   const onSuccess = useCallback(
//     (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
//       // GoogleLoginResponse 확인
//       if (!checkGoogleLoginResponseOffline(response)) {
//         setGoogleToken((response as GoogleLoginResponse).accessToken);
//         navigate("/main", { replace: true, state: response });
//       }
//     },
//     [checkGoogleLoginResponseOffline, navigate]
//   );

//   // 로그인 실패
//   const onFailure = useCallback((error: any) => {
//     console.log(`로그인 실패`);
//   }, []);

//   return (
//     <GoogleLogin
//       clientId={googleClientId}
//       buttonText="구글계정으로 로그인"
//       onSuccess={onSuccess}
//       onFailure={onFailure}
//       cookiePolicy={"single_host_origin"}
//       // isSignedIn={true} // Stay Logged in
//     />
//   );
// }

/*----- gsi 방법 -----*/
import { CredentialResponse } from "google-one-tap";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleClientId, setGoogleToken } from "../utills/googleUtill";

export default function GoogleLoginBtn() {
  // navi
  const navigate = useNavigate();

  // 로그인 성공
  const handleCredentialResponse = useCallback(
    (response: CredentialResponse) => {
      setGoogleToken(response.credential);
      navigate("/main", { replace: true, state: response });
    },
    [navigate]
  );

  useEffect(() => {
    // <script src="https://accounts.google.com/gsi/client" async defer></script>
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: googleClientId,
        callback: handleCredentialResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleLoginBtnDiv")!,
        { theme: "outline", size: "large" } // customization attributes
      );
      window.google.accounts.id.prompt(); // also display the One Tap dialog
    };
    // script 추가
    document.head.appendChild(script);

    // 언마운트시 script 제거
    return script.remove();
  }, [handleCredentialResponse]);

  return <div id="googleLoginBtnDiv"></div>;
}
