import { Box, Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  // navi
  const navigate = useNavigate();

  const onClickBtn = useCallback(() => {
    return navigate("/", { replace: true });
  }, [navigate]);
  return (
    <>
      <Box
        sx={{
          bgcolor: "custom.errorPageBackground",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // 가로축 정렬
          justifyContent: "center", // 세로축 정렬
        }}
      >
        ErrorPage
        <Button
          onClick={onClickBtn}
          sx={{
            bgcolor: "secondary.main",
            margin: 1,
            ":hover": { color: "secondary.main" },
          }}
        >
          IntroPage
        </Button>
      </Box>
    </>
  );
}
