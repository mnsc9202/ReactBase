// 선택한 버튼 타입
export type selectBtnType = {
  dndType: "single" | "multi";
  direction: "vertical" | "horizontal";
};

// 드래그 아이템 목록 타입
export type dragItemListType = {
  seq: number;
  content: string;
};

// 드래그 영역 목록 타입
export type dragAreaType = {
  name: string;
  items: dragItemListType[];
};
