import { Box, Button } from "@mui/material";

export default function PageB() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "custom.pageB",
          width: "100vw",
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 가로축 정렬
          justifyContent: "center", // 세로축 정렬
        }}
      >
        Page B
        <Button
          sx={{
            bgcolor: "secondary.main",
            margin: 1,
            ":hover": { color: "secondary.main" },
          }}
        >
          Button B
        </Button>
      </Box>
    </>
  );
}
