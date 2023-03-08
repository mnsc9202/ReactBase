import { Box, Button, TextField } from "@mui/material";
import React, { useCallback, useContext, useMemo, useState } from "react";
import { RequestDataContext } from "../store/requestData";
import { requestDataType, requestListType } from "../type/types";

export default function RequestContainer() {
  /*----- info -----*/
  // 저장할 초기값
  const initRequestData: requestDataType = useMemo(() => {
    return {
      name: "",
      mathScore: "",
      englishScore: "",
    };
  }, []);

  // 저장할 값 관리
  const [requestData, setRequestData] =
    useState<requestDataType>(initRequestData);

  /*----- context -----*/
  const requestDataContext = useContext(RequestDataContext);

  /*----- requestList -----*/
  const requestList = useMemo<requestListType[]>(() => {
    return [
      {
        label: "이름",
        name: "name",
      },
      {
        label: "수학점수",
        name: "mathScore",
      },
      {
        label: "영어점수",
        name: "englishScore",
      },
    ];
  }, []);

  /*----- func -----*/
  // 입력창 입력시
  const onChangeInputValue = useCallback((name: string, value: string) => {
    setRequestData((prev: requestDataType) => {
      return { ...prev, [name]: value };
    });
  }, []);

  // 저장버튼 클릭시
  const onSaveBtnClick = useCallback(() => {
    if (requestDataContext.dispatch !== null) {
      requestDataContext.dispatch({
        type: "create",
        requestData: requestData,
      });
      setRequestData(initRequestData);
    }
  }, [requestData, requestDataContext, initRequestData]);

  return (
    <Box
      sx={{
        width: "100vw",
        maxWidth: "100%",
        height: "50vh",
        maxHeight: "100%",
        bgcolor: "#F8F3EB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 요청 목록 */}
      {requestList.map((el: requestListType, i: number) => {
        return (
          // 입력
          <TextField
            key={el.name}
            label={el.label}
            value={requestData[el.name]}
            sx={{
              width: 200,
              marginBottom: 1,
            }}
            onChange={(
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              onChangeInputValue(el.name, event.target.value);
            }}
          />
        );
      })}
      <Button
        sx={{
          width: 200,
          bgcolor: "#373A6D",
          color: "#F8F3EB",
          ":hover": {
            color: "#373A6D",
            fontWeight: "bold",
          },
        }}
        onClick={onSaveBtnClick}
      >
        저장
      </Button>
    </Box>
  );
}
