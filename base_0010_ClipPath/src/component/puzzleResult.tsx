import puzzleImg from "../assets/puzzleImg.png";
import { getGuideSVG, getPathD } from "../util";

// props
type PuzzleResultProps = {
  selectPuzzleInfo: number[];
};

export default function PuzzleResult({ selectPuzzleInfo }: PuzzleResultProps) {
  return (
    <div style={{ width: "50%" }}>
      <svg viewBox="0 0 640 480">
        {/* clipPath적용 */}
        <defs>
          <clipPath id={`puzzle`}>{getPathD(selectPuzzleInfo)}</clipPath>
        </defs>

        {/* 원본 이미지 */}
        <image xlinkHref={puzzleImg} clipPath={`url(#puzzle)`} />

        {/* 가이드 svg */}
        {getGuideSVG(selectPuzzleInfo)}
      </svg>
    </div>
  );
}
