import { puzzleInfoType } from "../type";
import PuzzleSelectItem from "./puzzleSelectItem";

// props
type PuzzleSelectProps = {
  puzzleInfo: puzzleInfoType;
  selectPuzzleInfo: number[];
  onPuzzleItemClick: (itemindex: number) => void;
};
export default function PuzzleSelect({
  puzzleInfo,
  selectPuzzleInfo,
  onPuzzleItemClick,
}: PuzzleSelectProps) {
  return (
    <div
      style={{
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "auto",
      }}
    >
      {Array.from({ length: puzzleInfo.row }).map(
        (_rowValue: unknown, rowIndex: number) => {
          // 행
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
              key={`row_${rowIndex}`}
            >
              {Array.from({ length: puzzleInfo.column }).map(
                (_columnValue: unknown, columnIndex: number) => {
                  const itemIndex: number =
                    rowIndex * puzzleInfo.column + columnIndex;

                  const isSelected: boolean =
                    selectPuzzleInfo.find(
                      (value: number) => value === itemIndex
                    ) === undefined
                      ? false
                      : true;

                  // 열
                  return (
                    <PuzzleSelectItem
                      key={`column_${columnIndex}`}
                      itemIndex={itemIndex}
                      isSelected={isSelected}
                      onPuzzleItemClick={onPuzzleItemClick}
                    />
                  );
                }
              )}
            </div>
          );
        }
      )}
    </div>
  );
}
