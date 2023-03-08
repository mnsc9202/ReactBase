import create from "zustand";
import {
  initSelectItemStore,
  selectItemType,
  useSelectItemStoreType,
} from "../type/type";

export const useSelectItemStore = create<useSelectItemStoreType>(
  (set, get) => ({
    state: initSelectItemStore,
    setSelectItem: (el: selectItemType, id: string) => {
      // el의 id 설정
      const newEl: selectItemType = { ...el, id: id };

      let findEl: selectItemType | undefined = undefined;
      if (newEl.code === "fruit") {
        // 저장된 아이템 찾기
        findEl = get().state.find(
          (_el: selectItemType) => newEl.name === _el.name
        );
      }

      // 새로운 아이템인 경우 저장
      if (!findEl) {
        set((store: useSelectItemStoreType) => ({
          ...store,
          state: store.state.concat(newEl),
        }));
      }
    },
    getSelectItem: () => get().state,
    delSelectItem: (el: selectItemType) => {
      const newState: selectItemType[] = get().state.filter(
        (_el: selectItemType) => el.id !== _el.id
      );
      set((store: useSelectItemStoreType) => ({
        ...store,
        state: newState,
      }));
    },
  })
);
