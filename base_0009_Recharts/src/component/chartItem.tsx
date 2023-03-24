// props
type ChartItemProps = {
  isSelect: boolean; // 선택여부
  chartName: string; // 차트 아이템 이름
  onClick: () => void; // 차트 아이템 클릭시
};

export default function ChartItem({
  isSelect,
  chartName,
  onClick,
}: ChartItemProps) {
  return (
    <div
      style={{
        width: 15 * chartName.length,
        margin: 1,
        padding: 5,
        cursor: isSelect ? "default" : "pointer",
        backgroundColor: isSelect ? "#7286D3" : "#E5E0FF",
        color: isSelect ? "#F5EBEB" : "#7286D3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={isSelect ? undefined : onClick}
    >
      {chartName}
    </div>
  );
}
