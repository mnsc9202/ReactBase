import { ReactNode } from "react";
import { puzzlePathDType } from "./type";

// asset
import puzzleImgGuide_0 from "./assets/puzzleImgGuide_0.svg";
import puzzleImgGuide_1 from "./assets/puzzleImgGuide_1.svg";
import puzzleImgGuide_2 from "./assets/puzzleImgGuide_2.svg";
import puzzleImgGuide_3 from "./assets/puzzleImgGuide_3.svg";
import puzzleImgGuide_4 from "./assets/puzzleImgGuide_4.svg";
import puzzleImgGuide_5 from "./assets/puzzleImgGuide_5.svg";
import puzzleImgGuide_6 from "./assets/puzzleImgGuide_6.svg";
import puzzleImgGuide_7 from "./assets/puzzleImgGuide_7.svg";

// 퍼즐 위치별 정보
const puzzlePathD: puzzlePathDType[] = [
  /*
    * MoveTo (이동)
      - M: 해당 좌표로 이동
    * LineTo (그리기)
      - L: 선긋기
      - H: 가로선 긋기
      - V: 세로선 긋기
    * Close (닫기)
      - Z: 처음 과 끝을 연결하여 닫기
  */
  { index: 0, pathD: "M0 0 H 160 V 240 H 0 Z", guideSVG: puzzleImgGuide_0 },
  { index: 1, pathD: "M160 0 H 320 V 240 H 160 Z", guideSVG: puzzleImgGuide_1 },
  { index: 2, pathD: "M320 0 H 480 V 240 H 320 Z", guideSVG: puzzleImgGuide_2 },
  { index: 3, pathD: "M480 0 H 640 V 240 H 480 Z", guideSVG: puzzleImgGuide_3 },
  { index: 4, pathD: "M0 240 H 160 V 480 H 0 Z", guideSVG: puzzleImgGuide_4 },
  {
    index: 5,
    pathD: "M160 240 H 320 V 480 H 160 Z",
    guideSVG: puzzleImgGuide_5,
  },
  {
    index: 6,
    pathD: "M320 240 H 480 V 480 H 320 Z",
    guideSVG: puzzleImgGuide_6,
  },
  {
    index: 7,
    pathD: "M480 240 H 640 V 480 H 480 Z",
    guideSVG: puzzleImgGuide_7,
  },
];

// path 가져오기
export function getPathD(selectPuzzleInfo: number[]): ReactNode[] {
  return selectPuzzleInfo.reduce(
    (prev: ReactNode[], current: number, currentIndex: number) => {
      // pathD 찾기
      const findPathD: puzzlePathDType | undefined = puzzlePathD.find(
        (el: puzzlePathDType) => el.index === current
      );

      if (findPathD) {
        return prev.concat(<path d={findPathD.pathD} key={currentIndex} />);
      } else {
        return prev;
      }
    },
    [] as ReactNode[]
  );
}

// guide svg 가져오기
export function getGuideSVG(selectPuzzleInfo: number[]): ReactNode[] {
  return selectPuzzleInfo.reduce(
    (prev: ReactNode[], current: number, currentIndex: number) => {
      // pathD 찾기
      const findPathD: puzzlePathDType | undefined = puzzlePathD.find(
        (el: puzzlePathDType) => el.index === current
      );

      if (findPathD) {
        return prev.concat(
          <image
            xlinkHref={findPathD.guideSVG}
            clipPath={`url(#puzzle)`}
            key={currentIndex}
          />
        );
      } else {
        return prev;
      }
    },
    [] as ReactNode[]
  );
}
