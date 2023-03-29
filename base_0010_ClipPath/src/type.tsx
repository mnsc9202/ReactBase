// 퍼즐 정보
export type puzzleInfoType = {
  row: number; // 행
  column: number; // 열
};

// 퍼즐 위치별 정보 (pathD, guideSVG)
export type puzzlePathDType = {
  index: number;
  pathD: string;
  guideSVG: string;
};
