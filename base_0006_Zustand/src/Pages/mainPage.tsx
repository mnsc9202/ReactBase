import { useCallback, useMemo } from "react";
import { useSelectItemStore } from "../store/useSelectItemStore";
import { selectItemType, useSelectItemStoreType } from "../type/type";

export function MainPage() {
  /*----- info -----*/
  // 아이템 목록 (list의 id는 의미x)
  const itemList: selectItemType[] = useMemo(() => {
    return [
      { id: "", code: "fruit", name: "사과", bgColor: "#9C254D" },
      { id: "", code: "fruit", name: "바나나", bgColor: "#FFE15D" },
      { id: "", code: "fruit", name: "포도", bgColor: "#3B185F" },
      { id: "", code: "nature", name: "바다", bgColor: "#0014FF" },
      { id: "", code: "nature", name: "숲", bgColor: "#285430" },
    ];
  }, []);

  // store
  const selectItemStore: useSelectItemStoreType = useSelectItemStore();

  /*----- func -----*/
  // 아이템 클릭시 store에 저장
  const onItemClick = useCallback(
    (el: selectItemType) => {
      const itemList: selectItemType[] = selectItemStore.getSelectItem();
      let nextId: number = 1;
      if (itemList.length > 0) {
        const lastEl: selectItemType = itemList[itemList.length - 1];
        nextId = Number.parseInt(lastEl.id.split("_")[1]) + 1;
      }
      selectItemStore.setSelectItem(el, `${el.code}_${nextId}`);
    },
    [selectItemStore]
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {itemList.map((el: selectItemType, i: number) => {
          return (
            <div
              key={`${el.code}_${i}`}
              style={{
                width: 100,
                height: 100,
                boxShadow: `5px 5px 5px ${el.bgColor}`,
                border: "1px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                cursor: "pointer",
                backgroundColor: el.bgColor,
                color: "#fff",
              }}
              onClick={() => {
                onItemClick(el);
              }}
              onMouseOver={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                (event.target as HTMLDivElement).style.backgroundColor = "#000";
              }}
              onMouseLeave={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
              ) => {
                (
                  event.target as HTMLDivElement
                ).style.backgroundColor = `${el.bgColor}`;
              }}
            >
              {el.name}
            </div>
          );
        })}
      </div>
    </>
  );
}
