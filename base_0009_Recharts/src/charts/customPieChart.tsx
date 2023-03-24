import {
  Cell,
  Legend,
  Pie,
  PieChart,
  SectorProps,
  Tooltip,
  TooltipProps,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultTooltipContent";
import { Coordinate } from "recharts/types/util/types";
import { pieChartDataType, pieChartInfoType } from "../type";
import { getPieChartCellColor } from "../utils";

// props
type CustomPieChartProps = {
  data: pieChartDataType[];
  info: pieChartInfoType;
};

export default function CustomPieChart({ data, info }: CustomPieChartProps) {
  return (
    <PieChart width={500} height={500} style={{ padding: 0, margin: 0 }}>
      <Pie
        data={data}
        dataKey={info.key}
        nameKey={info.name}
        outerRadius={150} // 바깥쪽 반지름
        innerRadius={100} // 안쪽 반지름
        startAngle={90} // 시작 각도
        endAngle={-540} // 종료 각도
        label={PieChartLabel} // label
        labelLine={false} // label 표시선
      >
        {/* pie차트의 각 cell */}
        {data.map((el: pieChartDataType) => {
          return (
            <Cell
              key={el.area}
              fill={getPieChartCellColor(el.area)} // cell 색상
              stroke={"#fff"} // cell 테두리
            />
          );
        })}
      </Pie>

      {/* 설명(툴팁) */}
      <Tooltip
        content={PieChartTooltip}
        // wrapperStyle={{ outline: "none" }} // 툴팁 테두리 해결
      />

      {/* 범례 */}
      <Legend />
    </PieChart>
  );
}

/*---------- pie Label ----------*/
const RADIAN = Math.PI / 180; // 라디안
function PieChartLabel(
  props: SectorProps & {
    percent?: number; // 전체 값 중 cell 값의 비율
    name?: string | number; // cell 이름
    midAngle?: number; // cell의 시작angle과 끝angle의 중간
    middleRadius?: number; // 바깥쪽 반지름과 안쪽 반지름의 중간
    tooltipPosition?: Coordinate; // 툴팁 위치
    value?: number; // cell 값
    paddingAngle?: number; // cell 사이 여백
  }
) {
  const innerRadius: number = props.innerRadius ?? 0; // 안쪽 반지름
  const outerRadius: number = props.outerRadius ?? 0; // 바깥쪽 반지름
  const cx: number = props.cx ?? 0;
  const cy: number = props.cy ?? 0;
  const midAngle: number = props.midAngle ?? 0;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={midAngle + 90 > 0 ? x - 10 : x + 10}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(props.percent! * 100).toFixed(0)}%`}
    </text>
  );
}

/*---------- pie Tooltip ----------*/
function PieChartTooltip(props: TooltipProps<number, string>) {
  // active:활성화 여부, payload: cell 정보
  if (props.active && props.payload) {
    const target: Payload<number, string> = props.payload[0]; // pie의 cell
    const name: string = target.name ?? "";
    const value: number = target.value ?? 0;

    return (
      <div
        style={{
          padding: 10,
          backgroundColor: "#fff",
          borderRadius: 5,
          borderWidth: 3,
          borderStyle: "solid",
          borderColor: target.payload.fill,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{name}</div>
          <div>{`${value.toLocaleString()}명`}</div>
        </div>
      </div>
    );
  }

  return null;
}
