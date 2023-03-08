import { Box } from "@mui/material";

export default function MainPage() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "custom.mainPageBackground",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 가로축 정렬
          justifyContent: "center", // 세로축 정렬
        }}
      >
        MainPage
      </Box>
    </>
  );
}
