// props
type PuzzleSelectItemProps = {
  itemIndex: number;
  isSelected: boolean;
  onPuzzleItemClick: (itemindex: number) => void;
};

export default function PuzzleSelectItem({
  itemIndex,
  isSelected,
  onPuzzleItemClick,
}: PuzzleSelectItemProps) {
  return (
    <div
      style={{
        width: 150,
        height: 200,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: isSelected ? "#1A5F7A" : "#57C5B6",
        cursor: "default",
        userSelect: "none", // 드래그 방지
      }}
      onClick={() => onPuzzleItemClick(itemIndex)}
    >
      {""}
    </div>
  );
}
