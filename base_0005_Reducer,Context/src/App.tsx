import { useReducer } from "react";
import MainPage from "./pages/mainPage";
import {
  initRequestDataState,
  RequestDataContext,
  requestDataReducer,
} from "./store/requestData";

function App() {
  /*----- store -----*/
  const [requestDataState, requestDataDispatch] = useReducer(
    requestDataReducer,
    initRequestDataState
  );
  return (
    <RequestDataContext.Provider
      value={{ state: requestDataState, dispatch: requestDataDispatch }}
    >
      <MainPage />
    </RequestDataContext.Provider>
  );
}

export default App;
