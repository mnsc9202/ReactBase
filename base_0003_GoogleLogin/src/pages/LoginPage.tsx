import { Box } from "@mui/material";
import GoogleLoginBtn from "../components/googleLoginBtn";

export default function LoginPage() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ margin: 1, color: "#1C6758", fontSize: 20, fontWeight: "bold" }}
      >
        LoginPage
      </Box>
      <GoogleLoginBtn />
    </Box>
  );
}
