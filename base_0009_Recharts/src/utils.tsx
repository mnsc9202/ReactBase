import {
  dataType,
  chartType,
  selectChartInfoType,
  pieChartColorListType,
  barChartDataType,
  lineChartDataType,
  pieChartDataType,
  radarChartDataType,
} from "./type";
import barChartData from "./tempData/barChartData.json";
import lineChartData from "./tempData/lineChartData.json";
import pieChartData from "./tempData/pieChartData.json";
import radarChartData from "./tempData/radarChartData.json";
import CustomBarChart from "./charts/customBarChart";
import CustomLineChart from "./charts/customLineChart";
import CustomPieChart from "./charts/customPieChart";
import CustomRadarChart from "./charts/customRadarChart";
import { Payload } from "recharts/types/component/DefaultLegendContent";

/*---------- mainPage ----------*/
// 차트목록
export const chartList: chartType[] = ["bar", "line", "pie", "radar"];

// 차트 데이터 가져오기
export function getChartData(chartName: chartType): dataType {
  switch (chartName) {
    case "bar": {
      return barChartData;
    }
    case "line": {
      return lineChartData;
    }
    case "pie": {
      return pieChartData;
    }
    case "radar": {
      return radarChartData;
    }
  }
}

// 선택한 차트 정보 초기값
export const initSelectChartInfo: selectChartInfoType = {
  chart: "bar",
  data: getChartData("bar"),
};

/*---------- chartWrapper ----------*/
// 차트 가져오기
export function getChart(chartInfo: selectChartInfoType): JSX.Element {
  let chart: JSX.Element = <></>; // 차트
  switch (chartInfo.chart) {
    case "bar": {
      chart = (
        <CustomBarChart
          data={chartInfo.data as barChartDataType[]}
          info={{
            xAxisDataKey: "fruitName",
            barInfo: [
              { key: "maxPrice", fill: "#E49393" },
              { key: "minPrice", fill: "#408E91" },
            ],
          }}
        />
      );
      break;
    }

    case "line": {
      chart = (
        <CustomLineChart
          data={chartInfo.data as lineChartDataType[]}
          info={{
            xAxisDataKey: "year",
            lineInfo: [
              { type: "monotone", key: "height", stroke: "#AA77FF" },
              { type: "monotone", key: "weight", stroke: "#62CDFF" },
            ],
          }}
        />
      );
      break;
    }

    case "pie": {
      chart = (
        <CustomPieChart
          data={chartInfo.data as pieChartDataType[]}
          info={{ key: "population", name: "area" }}
        />
      );
      break;
    }

    case "radar": {
      chart = (
        <CustomRadarChart
          data={chartInfo.data as radarChartDataType[]}
          info={{
            polarAngleAxisDataKey: "subject",
            polarRadiusAxis: {
              angle: 30,
              domain: {
                minValue: 0,
                maxValue: 100,
              },
            },
            radarInfo: [
              {
                key: "averageScore",
                name: "평균 점수",
                fill: "#3E54AC",
                stroke: "#BFDCE5",
                fillOpactity: 0.2,
              },
              {
                key: "score",
                name: "내 점수",
                fill: "#F55050",
                stroke: "#F48484",
                fillOpactity: 0.2,
              },
            ],
          }}
        />
      );
    }
  }
  return chart;
}

/*---------- customBarChart ----------*/
// 차트 범례내용 가져오기
export function getBarChartLegendValue(value: Payload): string {
  let arrangeValue: string = "";
  switch (value.value) {
    case "minPrice": {
      arrangeValue = "최소가격";
      break;
    }
    case "maxPrice": {
      arrangeValue = "최대가격";
      break;
    }
  }
  return arrangeValue;
}

/*---------- customPieChart ----------*/
// pie차트 cell 색상목록
export const pieChartColorList: pieChartColorListType[] = [
  { area: "서울특별시", color: "#E7B10A" },
  { area: "경기도", color: "#898121" },
  { area: "강원도", color: "#4C4B16" },
  { area: "충청도", color: "#BE6DB7" },
  { area: "부산광역시", color: "#DC8449" },
];

// pie차트 cell 색상 가져오기
export function getPieChartCellColor(areaName: string): string {
  return (
    pieChartColorList.find((el: pieChartColorListType) => el.area === areaName)
      ?.color ?? "#fff"
  );
}

// pie차트의 최대값 찾기
export function getPieChartMaxValue(data: barChartDataType[]): number {
  let maxValue: number = 0;
  data.forEach((el: barChartDataType) => {
    if (maxValue < el.maxPrice) {
      maxValue = el.maxPrice;
    }
  });

  return maxValue;
}
