export type selectItemType = {
  id: string;
  code: string;
  name: string;
  bgColor: string;
};

export type useSelectItemStoreType = {
  state: selectItemType[];
  setSelectItem: (el: selectItemType, id: string) => void;
  getSelectItem: () => selectItemType[];
  delSelectItem: (el: selectItemType) => void;
};

export const initSelectItemStore: selectItemType[] = [];
