import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  XAxis,
  YAxis,
} from "recharts";
import { barChartDataType, barChartInfoType } from "../type";
import type { Props as BarLabelProps } from "recharts/types/component/Label";
import type {
  Payload,
  Props as BarLegendProps,
} from "recharts/types/component/DefaultLegendContent";
import { useMemo } from "react";
import { getBarChartLegendValue, getPieChartMaxValue } from "../utils";

// asset
import { ReactComponent as BarPoint } from "../assets/barChartPoint.svg";

// props
type CustomBarChartProps = {
  data: barChartDataType[];
  info: barChartInfoType;
};

export default function CustomBarChart({ data, info }: CustomBarChartProps) {
  /*---------- info ----------*/
  // 최대값
  const maxValue: number = useMemo(() => {
    return getPieChartMaxValue(data);
  }, [data]);

  return (
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
      barSize={50} // bar 굵기
    >
      {/* 격자선 */}
      <CartesianGrid
        strokeDasharray={"5 2"} // 격자선의 굵기, 간격
        stroke="#AEC2B6" // 격자선 색상
        vertical={false} // 수직 격자선 사용여부
      />

      {/* x축 */}
      <XAxis
        dataKey={info.xAxisDataKey}
        tickLine={false} // bar와 내용 연결선 표시여부
        axisLine={false} // x축 표시
        tick={{ fontSize: 15 }} // x축 내용 글자 크기
      />

      {/* y축 */}
      <YAxis
        tickLine={false} // bar와 내용 연결선 표시여부
        axisLine={false} // y축 표시
        width={80} // y축 영역 너비
        domain={[0, 30000]} // y축 범위
        tickCount={11} // y축 표시 개수
        // y축 내용 표시 방식
        tickFormatter={(value: number) => {
          return String(value.toLocaleString()) + "원";
        }}
        tick={{ fill: "#413543" }} // y축 내용 색상
      />

      {/* bar */}
      {info.barInfo.map((el: { key: string; fill: string }) => {
        return (
          <Bar key={el.key} dataKey={el.key} fill={el.fill}>
            <LabelList
              dataKey={el.key}
              content={(props: BarLabelProps) => {
                return <BarChartLabel props={props} maxValue={maxValue} />;
              }}
            />
          </Bar>
        );
      })}

      {/* 범례 */}
      <Legend content={barChartLegend} />
    </BarChart>
  );
}

/*---------- bar Label ----------*/
// props
type BarChartLabelProps = {
  props: BarLabelProps;
  maxValue: number;
};
function BarChartLabel({ props, maxValue }: BarChartLabelProps) {
  const x: number = props.x as number; // label의 x 위치
  const y: number = props.y as number; // label의 y 위치
  const width: number = props.width as number; // cell의 너비
  const value: string = props.value as string; // label 값

  // cell 안에 label표시 여부 (true:안에 표시, false:밖에 표시)
  const isAbleInnerText: boolean =
    (props.height as number) > 500 * 0.05 ? true : false;

  const pointHeight: number = 48; // 최대값 표시 아이콘의 높이
  return (
    <g>
      {/* 최대값 표시 */}
      {(props.value as number) === maxValue && (
        <>
          <BarPoint x={x} y={y - pointHeight - 5} />
          <text
            x={x + 10}
            y={y - pointHeight / 2 - 5}
            fontSize={10}
            fill={"#FEFAE0"}
          >
            최대
          </text>
        </>
      )}

      {/* 값 표시 */}
      <text
        x={x + width / 2}
        y={isAbleInnerText ? y + 20 : y - 10}
        fill={isAbleInnerText ? "#fff" : "#000"}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
      >
        {value}
      </text>
    </g>
  );
}

/*---------- bar Legend ----------*/
function barChartLegend(props: BarLegendProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 50,
      }}
    >
      {props.payload?.map((value: Payload, index: number) => {
        return (
          <div key={value.value} style={{ display: "flex" }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value.color,
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 5,
                marginRight: 5,
                fontSize: 10,
              }}
            >
              {getBarChartLegendValue(value)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
