import { createContext, Dispatch } from "react";
import { requestDataActionType, requestDataStateType } from "../type/types";

/*----- context -----*/
type requestDataContextType = {
  state: requestDataStateType | null;
  dispatch: Dispatch<requestDataActionType> | null;
};
const initRequestDataContext = {
  state: null,
  dispatch: null,
};
export const RequestDataContext = createContext<requestDataContextType>(
  initRequestDataContext
);

/*----- reducer -----*/
export const initRequestDataState: requestDataStateType = {
  requestData: {
    name: "",
    mathScore: "",
    englishScore: "",
  },
  requestDataList: [],
};

export function requestDataReducer(
  state: requestDataStateType,
  action: requestDataActionType
) {
  switch (action.type) {
    case "create": {
      return {
        ...state,
        requestData: action.requestData,
        requestDataList: state.requestDataList.concat(action.requestData),
      };
    }
    default:
      throw new Error("Unhandeld action");
  }
}
