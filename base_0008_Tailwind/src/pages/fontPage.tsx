import { useMemo, useState } from "react";

export default function FontPage() {
  // 선택한 폰트
  const [selectFont, setSelectFont] = useState<string>("null");

  // 폰트목록
  const fontList: { [fontName: string]: string } = useMemo(() => {
    return {
      JuaRegular: "font-JuaRegular",
      DoHyeon: "font-DoHyeon",
      Dokdo: "font-Dokdo",
    };
  }, []);

  return (
    // wrapper
    <div className="flex flex-col items-center justify-center">
      {/* 폰트 선택 목록 */}
      <div className="flex items-center justify-center">
        {Object.keys(fontList).map((fontName: string) => {
          return (
            <div
              className="m-5 border border-sky-500 bg-sky-400 text-white cursor-pointer p-1"
              key={fontName}
              onClick={() => setSelectFont(fontName)}
            >
              {fontName}
            </div>
          );
        })}
      </div>

      {/* 폰트 결과 */}
      <div className="flex">
        {`선택한 폰트: `}
        <div className={`${fontList[selectFont]} ml-3`}>{` ${
          selectFont === "null" ? "없음" : selectFont
        }`}</div>
      </div>
    </div>
  );
}
