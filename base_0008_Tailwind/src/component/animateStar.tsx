// asset
import { ReactComponent as Star } from "../asset/svg/star.svg";

// props
type AnimateStarProps = {
  animate: string;
};

export default function AnimateStar({ animate }: AnimateStarProps) {
  return (
    <div
      className={`bg-purple-700 w-5 h-5 rounded-full flex items-center justify-center ${animate}`}
    >
      <Star />
    </div>
  );
}
