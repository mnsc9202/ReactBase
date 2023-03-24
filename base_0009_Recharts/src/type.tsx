import { CurveType } from "recharts/types/shape/Curve";

// 차트 종류
export type chartType = "bar" | "line" | "pie" | "radar";

// bar차트 데이터
export type barChartDataType = {
  fruitName: string; // 과일이름
  maxPrice: number; // 최고가격
  minPrice: number; // 최저가격
};

// line차트 데이터
export type lineChartDataType = {
  year: string; // 연도
  height: number; // 키
  weight: number; // 몸무게
};

// pie차트 데이터
export type pieChartDataType = {
  area: string; // 지역
  population: number; // 인구수
};

// radar차트 데이터
export type radarChartDataType = {
  subject: string; // 과목
  score: number; // 점수
  averageScore: number; // 평균점수
  perfectScore: number; // 최고점수
};

// 차트 데이터 종류
export type dataType =
  | barChartDataType[]
  | lineChartDataType[]
  | pieChartDataType[]
  | radarChartDataType[];

// 선택한 차트정보
export type selectChartInfoType = {
  chart: chartType;
  data: dataType;
};

/*----- 기타 -----*/
// pie차트 색상목록
export type pieChartColorListType = {
  area: string;
  color: string;
};

/*----- chartInfo -----*/
// bar
export type barChartInfoType = {
  xAxisDataKey: string;
  barInfo: { key: string; fill: string }[];
};

// line
export type lineChartInfoType = {
  xAxisDataKey: string;
  lineInfo: { type: CurveType; key: string; stroke: string }[];
};

// pie
export type pieChartInfoType = {
  key: string;
  name: string;
};

// radar
export type radarChartInfoType = {
  polarAngleAxisDataKey: string;
  polarRadiusAxis: {
    angle: number;
    domain: {
      minValue: number;
      maxValue: number;
    };
  };
  radarInfo: {
    key: string;
    name: string;
    stroke: string;
    fill: string;
    fillOpactity: number;
  }[];
};
