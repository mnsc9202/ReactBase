import { useCallback, useState } from "react";
import MutiDND from "../DND/multiDND";
import SingleDND from "../DND/singleDND";
import { color } from "../type/color";
import { selectBtnType } from "../type/type";

export default function MainPage() {
  // 선택한 버튼정보
  const [selectBtn, setSelectBtn] = useState<selectBtnType>({
    dndType: "single",
    direction: "vertical",
  });

  // 타입변경 버튼클릭시
  const onChangeDndType = useCallback(
    (changeType: selectBtnType["dndType"]) => {
      setSelectBtn((prev: selectBtnType) => ({ ...prev, dndType: changeType }));
    },
    []
  );

  // 방향변경 버튼클릭시
  const onChangeDirection = useCallback(
    (changeDirection: selectBtnType["direction"]) => {
      setSelectBtn((prev: selectBtnType) => ({
        ...prev,
        direction: changeDirection,
      }));
    },
    []
  );

  return (
    <div
      style={{
        minWidth: 1280,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* dnd 종류 + 방향 */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        {[
          ["single", "multi"],
          ["vertical", "horizontal"],
        ].map((el: string[], elIndex: number) => {
          return (
            <div
              style={{
                width: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={elIndex}
            >
              {el.map((value: string, valueIndex: number) => {
                return (
                  <div
                    key={value}
                    style={{
                      width: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "1px 1px 1px lightgray",
                      padding: 10,
                      margin: 10,
                      cursor: "pointer",
                      backgroundColor:
                        elIndex === 0
                          ? selectBtn.dndType ===
                            (value as selectBtnType["dndType"])
                            ? color.selectBtnOn
                            : color.selectBtnOff
                          : selectBtn.direction ===
                            (value as selectBtnType["direction"])
                          ? color.selectBtnOn
                          : color.selectBtnOff,
                    }}
                    onClick={
                      elIndex === 0
                        ? () =>
                            onChangeDndType(value as selectBtnType["dndType"])
                        : () =>
                            onChangeDirection(
                              value as selectBtnType["direction"]
                            )
                    }
                  >
                    {value}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {selectBtn.dndType === "single" && (
        <SingleDND direction={selectBtn.direction} />
      )}
      {selectBtn.dndType === "multi" && (
        <MutiDND direction={selectBtn.direction} />
      )}
    </div>
  );
}
