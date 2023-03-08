import { Box, Button } from "@mui/material";

export default function LoginPage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "custom.loginPageBackground",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 가로축 정렬
          justifyContent: "center", // 세로축 정렬
        }}
      >
        LoginPage
        <Button
          href="/main"
          sx={{
            bgcolor: "secondary.main",
            margin: 1,
            ":hover": { color: "secondary.main" },
          }}
        >
          MainPage
        </Button>
      </Box>
    </>
  );
}
