import { useMemo, useState } from "react";
import AnimateStar from "../component/animateStar";

export default function AnimationPage() {
  // 애니메이션 목록 타입
  type animationListType = {
    name: string;
    animation: string;
  };

  // 애니메이션 목록
  const animationList = useMemo<animationListType[]>(() => {
    return [
      { name: "없음", animation: "" },
      { name: "위아래", animation: "animate-bounceStar" },
      { name: "회전", animation: "animate-rotateStar" },
    ];
  }, []);

  // 선택한 애니메이션
  const [selectAnimation, setSelectAnimation] = useState<string>("");

  return (
    // wrapper
    <div className="flex flex-col items-center justify-center">
      {/* 애니메이션 선택목록 */}
      <div className="flex">
        {animationList.map((el: animationListType) => {
          return (
            <button
              className="animationBtn"
              onClick={() => setSelectAnimation(el.animation)}
            >
              {el.name}
            </button>
          );
        })}
      </div>

      {/* 애니메이션 적용 */}
      <div className="flex">
        <AnimateStar animate={`${selectAnimation}`} />
      </div>
    </div>
  );
}
