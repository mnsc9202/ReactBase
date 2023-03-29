import { useCallback, useMemo, useState } from "react";
import PuzzleResult from "../component/puzzleResult";
import PuzzleSelect from "../component/puzzleSelect";
import { puzzleInfoType } from "../type";

export default function MainPage() {
  /*---------- info ----------*/
  // 퍼즐 정보
  const puzzleInfo: puzzleInfoType = useMemo(() => {
    return { row: 2, column: 4 };
  }, []);

  // 선택한 퍼즐 정보(위치)
  const [selectPuzzleInfo, setSelectPuzzleInfo] = useState<number[]>([]);

  // 퍼즐아이템 클릭시
  const onPuzzleItemClick = useCallback(
    (itemindex: number) => {
      // 중복체크
      const findItemIndex: number | undefined = selectPuzzleInfo.findIndex(
        (value: number, _i: number) => value === itemindex
      );

      // 클릭한 아이템이 새로운 아이템인 경우
      if (findItemIndex === -1) {
        // 선택한 아이템 추가
        const copySelectPuzzleInfo: number[] = [...selectPuzzleInfo];
        copySelectPuzzleInfo.push(itemindex);

        setSelectPuzzleInfo(copySelectPuzzleInfo);
        return;
      }

      // 클릭한 아이템이 기존 아이템인 경우 클릭한 아이템 제외
      const arrangeSelectPuzzleInfo: number[] = selectPuzzleInfo
        .slice(0, findItemIndex)
        .concat(
          selectPuzzleInfo.slice(findItemIndex + 1, selectPuzzleInfo.length)
        );
      setSelectPuzzleInfo(arrangeSelectPuzzleInfo);
    },
    [selectPuzzleInfo]
  );
  return (
    // wrapper
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 결과 영역 */}
      <PuzzleResult selectPuzzleInfo={selectPuzzleInfo} />

      {/* 선택 영역 */}
      <PuzzleSelect
        puzzleInfo={puzzleInfo}
        selectPuzzleInfo={selectPuzzleInfo}
        onPuzzleItemClick={onPuzzleItemClick}
      />
    </div>
  );
}
