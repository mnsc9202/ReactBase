/*----- gapi 방법 -----*/
// import { Box } from "@mui/material";
// import { useEffect } from "react";
// import { GoogleLoginResponse } from "react-google-login";
// import { useLocation, useNavigate } from "react-router-dom";
// import CustomGoogleLogoutBtn from "../components/customGoogleLogoutBtn";
// import GoogleLogoutBtn from "../components/googleLogoutBtn";

// export default function MainPage() {
//   const navigate = useNavigate();
//   const googleRes = useLocation().state as GoogleLoginResponse;
//   useEffect(() => {
//     if (googleRes === null || undefined) navigate("/", { replace: true });
//   }, [googleRes, navigate]);

//   return (
//     googleRes && (
//       <>
//         {/* title */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             margin: 1,
//             color: "#1C6758",
//             fontSize: 20,
//             fontWeight: "bold",
//           }}
//         >
//           MainPage
//         </Box>

//         {/* profile */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             alignItems: "left",
//             justifyContent: "center",
//           }}
//         >
//           <Box
//             component="img"
//             src={googleRes.profileObj.imageUrl}
//             sx={{ width: "5vw" }}
//           />
//           <Box>
//             <Box>{`이름: ${googleRes.profileObj.name}`}</Box>
//             <Box>{`이메일: ${googleRes.profileObj.email}`}</Box>
//           </Box>
//         </Box>

//         {/* logout */}
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             margin: 1,
//           }}
//         >
//           <GoogleLogoutBtn />
//           <CustomGoogleLogoutBtn />
//         </Box>
//       </>
//     )
//   );
// }

/*----- gsi 방법 -----*/
import { Box } from "@mui/material";
import { CredentialResponse } from "google-one-tap";
import jwtDecode from "jwt-decode";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CustomGoogleLogoutBtn from "../components/customGoogleLogoutBtn";

export default function MainPage() {
  const navigate = useNavigate();
  const googleRes = useLocation().state as CredentialResponse;

  // decode
  type responsePayloadType = {
    iss: string; // The JWT's issuer ("https://accounts.google.com")
    nbf: number;
    aud: string; // Your server's client ID
    sub: string; // The unique ID of the user's Google Account
    hd: string; // If present, the host domain of the user's GSuite email address("gmail.com")
    email: string; // The user's email address
    email_verified: boolean; // true, if Google has verified the email address
    azp: string;
    name: string;
    // If present, a URL to user's profile picture
    picture: string;
    given_name: string;
    family_name: string;
    iat: number; // Unix timestamp of the assertion's creation time
    exp: number; // Unix timestamp of the assertion's expiration time
    jti: string;
  };

  const decodeJwtResponse = useCallback(
    (responseCredential: string): responsePayloadType => {
      const responsePayload: responsePayloadType =
        jwtDecode(responseCredential);
      return responsePayload;
    },
    []
  );

  const profileObj = useMemo<responsePayloadType | null>(() => {
    if (googleRes) return decodeJwtResponse(googleRes.credential);
    return null;
  }, [decodeJwtResponse, googleRes]);

  useEffect(() => {
    if (googleRes === null || undefined) navigate("/", { replace: true });
  }, [googleRes, navigate]);
  return (
    googleRes && (
      <>
        {/* title */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            margin: 1,
            color: "#1C6758",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          MainPage
        </Box>

        {/* profile */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={profileObj?.picture}
            sx={{ width: "5vw" }}
          />
          <Box>
            <Box>{`이름: ${profileObj?.name}`}</Box>
            <Box>{`이메일: ${profileObj?.email}`}</Box>
          </Box>
        </Box>

        {/* logout */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 1,
          }}
        >
          <CustomGoogleLogoutBtn />
        </Box>
      </>
    )
  );
}
