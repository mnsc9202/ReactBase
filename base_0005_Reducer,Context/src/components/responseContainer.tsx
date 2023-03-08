import { Box, Button } from "@mui/material";
import { useCallback, useContext, useMemo, useState } from "react";
import { RequestDataContext } from "../store/requestData";
import { requestDataStateType, requestDataType } from "../type/types";

export default function ResponseContainer() {
  /*----- context -----*/
  const requestDataContext = useContext(RequestDataContext);
  const requestDataState: requestDataStateType | null = useMemo(() => {
    return requestDataContext.state;
  }, [requestDataContext.state]);

  /*----- info -----*/
  const [isResultShow, setIsResultShow] = useState<boolean>(false); // 결과 보이기 여부

  /*----- func -----*/
  // 결과 버튼 클릭시
  const resultShowBtnClick = useCallback(() => {
    setIsResultShow((prev: boolean) => {
      return !prev;
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          maxWidth: "100%",
          height: "50vh",
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Button
          sx={{
            bgcolor: "#FF8246",
            color: "#F8F3EB",
            width: 200,
            ":hover": {
              color: "#373A6D",
              fontWeight: "bold",
            },
          }}
          onClick={resultShowBtnClick}
        >
          {!isResultShow ? "결과 보이기" : "결과 숨기기"}
        </Button>

        {/* 결과 */}
        {isResultShow && (
          // container
          <Box
            sx={{
              width: "100vw",
              maxWidth: "100%",
              // height: "50vh",
              // maxHeight: "100%",
              bgcolor: "#BEEEF7",
            }}
          >
            {/* Wrapper */}
            <Box
              sx={{
                margin: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* 최근 입력했던 값 */}
              <Box
                sx={{
                  fontWeight: "bold",
                  color: "#95389E",
                  width: "30%",
                  // height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  padding: 1,
                }}
              >
                최근 입력값:
                {requestDataState?.requestData.name}/
                {requestDataState?.requestData.mathScore}/
                {requestDataState?.requestData.englishScore}
              </Box>

              {/* 입력했던 값 목록 */}
              <Box
                sx={{
                  width: "30%",
                  height: 300,
                  overflowY: "scroll",
                  border: "3px solid #fff",
                  marginTop: 2,
                }}
              >
                {requestDataState?.requestDataList.map(
                  (el: requestDataType, i: number) => {
                    return (
                      <Box sx={{ display: "flex" }} key={`${el.name}_${i}`}>
                        <Box
                          sx={{
                            bgcolor: "#fff",
                            boxShadow: 3,
                            width: "80%",
                            height: 80,
                            margin: 1,
                            padding: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            borderRadius: 3,
                          }}
                        >
                          <Box>{`이름: ${el.name}`}</Box>
                          <Box>{`수학점수: ${el.mathScore}`}</Box>
                          <Box>{`영어점수: ${el.englishScore}`}</Box>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
