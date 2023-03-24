import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CurveType } from "recharts/types/shape/Curve";
import { lineChartDataType, lineChartInfoType } from "../type";

// props
type CustomLineChartProps = {
  data: lineChartDataType[];
  info: lineChartInfoType;
};

export default function CustomLineChart({ data, info }: CustomLineChartProps) {
  return (
    <LineChart
      width={700}
      height={500}
      data={data}
      margin={{ top: 0, right: 50, left: 50, bottom: 0 }}
    >
      {/* x축 */}
      <XAxis
        dataKey={info.xAxisDataKey}
        tick={{ fontSize: 10 }} // x축 내용 글자 크기
        interval={0} // x축 내용 표시 간격
        // x축 내용 표시 방식
        tickFormatter={(value: string, i: number) => {
          return `${value.substring(2, value.length)}`;
        }}
      />

      {/* y축 */}
      <YAxis />

      {/* line */}
      {info.lineInfo.map(
        (el: { type: CurveType; key: string; stroke: string }) => {
          return (
            <Line
              type={el.type}
              dataKey={el.key}
              stroke={el.stroke}
              key={el.key}
            />
          );
        }
      )}

      {/* 설명(툴팁) */}
      <Tooltip />

      {/* 범례 */}
      <Legend />
    </LineChart>
  );
}
