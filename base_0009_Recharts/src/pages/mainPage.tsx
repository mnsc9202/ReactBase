import { useCallback, useState } from "react";
import ChartWrapper from "../component/chartWrapper";
import ChartItem from "../component/chartItem";
import { chartType, selectChartInfoType } from "../type";
import { chartList, getChartData, initSelectChartInfo } from "../utils";

export default function MainPage() {
  /*---------- info ----------*/
  // 선택한 차트정보
  const [selectChartInfo, setSelectChartInfo] =
    useState<selectChartInfoType>(initSelectChartInfo);

  // 차트목록의 아이템 클릭시
  const onChartItemClick = useCallback((chartName: chartType) => {
    setSelectChartInfo({ chart: chartName, data: getChartData(chartName) });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 차트메뉴 */}
      <div style={{ display: "flex", marginBottom: 10 }}>
        {chartList.map((chartName: chartType) => {
          return (
            <ChartItem
              key={chartName}
              isSelect={selectChartInfo.chart === chartName}
              chartName={chartName}
              onClick={() => onChartItemClick(chartName)}
            />
          );
        })}
      </div>

      {/* 차트 */}
      <ChartWrapper chartInfo={selectChartInfo} />
    </div>
  );
}
