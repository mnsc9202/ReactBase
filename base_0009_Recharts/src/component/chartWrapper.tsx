import { ResponsiveContainer } from "recharts";
import { selectChartInfoType } from "../type";
import { getChart } from "../utils";

// props
type ChartWrapperProps = {
  chartInfo: selectChartInfoType; // 선택한 차트 정보
};

export default function ChartWrapper({ chartInfo }: ChartWrapperProps) {
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={500}>
        {getChart(chartInfo)}
      </ResponsiveContainer>
    </div>
  );
}
