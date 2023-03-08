import { ReactNode } from "react";

// props
type PageContainerProps = {
  title: string;
  children: ReactNode;
};

export default function PageContainer({
  title,
  children,
  ...p
}: PageContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    // wrapper
    <div className={`${p.className} rounded-[20px] m-[20px] p-[10px] relative`}>
      {/* 제목 */}
      <div
        className={`absolute top-[-10px] left-[20px] rounded-[10px] bg-white pl-2 pr-2 pt-1 pb-1 ${p.className}`}
      >
        {title}
      </div>

      {/* 내용 */}
      <div className="mt-[20px] min-h-[100px] min-w-[200px] overflow-auto">
        {children}
      </div>
    </div>
  );
}
