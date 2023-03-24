import {
  LabelList,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { Props as RadarLabelProps } from "recharts/types/component/Label";
import { Props as RadarLegendProps } from "recharts/types/component/DefaultLegendContent";
import { Props as RadarPolarAngleAxisProps } from "recharts/types/polar/PolarAngleAxis";
import { radarChartDataType, radarChartInfoType } from "../type";

// props
type CustomRadarChartProps = {
  data: radarChartDataType[];
  info: radarChartInfoType;
};

export default function CustomRadarChart({
  data,
  info,
}: CustomRadarChartProps) {
  return (
    <RadarChart outerRadius={200} width={500} height={500} data={data}>
      <PolarGrid />

      {/* 각도 축 */}
      <PolarAngleAxis dataKey={info.polarAngleAxisDataKey} tick={RadarTick} />

      {/* 반지름축 */}
      <PolarRadiusAxis
        angle={info.polarRadiusAxis.angle}
        domain={[
          info.polarRadiusAxis.domain.minValue, // 최소값
          info.polarRadiusAxis.domain.maxValue, // 최대값
        ]}
        axisLine={false} // 축 표시
        tick={false} // 축의 값 표시
      />

      {/* radar */}
      {info.radarInfo.map(
        (el: {
          key: string;
          name: string;
          stroke: string;
          fill: string;
          fillOpactity: number;
        }) => {
          return (
            <Radar
              key={el.name}
              name={el.name}
              dataKey={el.key}
              stroke={el.stroke}
              fill={el.fill}
              fillOpacity={el.fillOpactity}
            >
              {el.key === "score" && <LabelList content={RadarChartLabel} />}
            </Radar>
          );
        }
      )}

      {/* 범례 */}
      <Legend content={RadarChartLegend} />
    </RadarChart>
  );
}

/*---------- radar Tick ----------*/
function RadarTick(
  props: RadarPolarAngleAxisProps & {
    payload: {
      coordinate: number;
      value: string;
      index: number;
      offset: number;
    };
  }
) {
  const radius: number = props.radius ?? 0;
  const x: number = props.x as number;
  const y: number = props.y as number;
  const textAnchor: string = props.textAnchor ?? ""; // 줄바꿈정렬
  const stroke: string = props.stroke ?? "";
  return (
    <g>
      <text radius={radius} stroke={stroke} x={x} y={y} textAnchor={textAnchor}>
        <tspan fill="#03001C" fontSize={14} fontWeight={"bold"}>
          {props.payload.value}
        </tspan>
      </text>
    </g>
  );
}

/*---------- radar Label ----------*/
function RadarChartLabel(props: RadarLabelProps) {
  const x: number = props.x as number;
  const y: number = props.y as number;
  const radius: number = props.radius as number;

  const boxWidth: number = 20;
  const boxHeight: number = 15;

  const boxX: number = x - boxWidth / 2;
  const boxY: number = y - boxHeight / 2;

  return (
    <g>
      <rect
        x={boxX}
        y={boxY}
        r={radius}
        rx={5}
        width={boxWidth}
        height={boxHeight}
        fill="#F55050"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#FFEAEA"
        fontSize={10}
      >
        {props.value}
      </text>
    </g>
  );
}

/*---------- radar Legend ----------*/
function RadarChartLegend(props: RadarLegendProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {props.payload?.map((el: Payload, i: number) => {
        return (
          <div
            key={`${el.value}_${i}`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: el.color,
                width: 15,
                height: 15,
                marginLeft: 5,
                marginRight: 5,
              }}
            />
            <div>{el.value}</div>
          </div>
        );
      })}
    </div>
  );
}
