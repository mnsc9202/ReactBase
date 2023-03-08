export type requestDataType = {
  name: string;
  mathScore: string;
  englishScore: string;
};

export type requestListType = {
  label: string;
  name: "name" | "mathScore" | "englishScore";
};

/*----- store -----*/
export type requestDataStateType = {
  requestData: requestDataType;
  requestDataList: requestDataType[];
};

export type requestDataActionType = {
  type: string; // 액션 타입
  requestData: requestDataType;
};
