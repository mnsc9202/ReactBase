import { Box, Button } from "@mui/material";

export default function IntroPage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "custom.introPageBackground",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 가로축 정렬
          justifyContent: "center", // 세로축 정렬
        }}
      >
        IntroPage
        <Button
          href="/login"
          sx={{
            bgcolor: "secondary.main",
            margin: 1,
            ":hover": { color: "secondary.main" },
          }}
        >
          LoginPage
        </Button>
      </Box>
    </>
  );
}
