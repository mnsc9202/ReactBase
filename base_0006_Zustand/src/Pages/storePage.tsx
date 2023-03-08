import { useCallback, useState } from "react";
import { useSelectItemStore } from "../store/useSelectItemStore";
import { selectItemType, useSelectItemStoreType } from "../type/type";

export default function StorePage() {
  /*----- info -----*/
  // store
  const selectItemStore: useSelectItemStoreType = useSelectItemStore();
  // 저장목록 보여주기 여부
  const [isOpenStore, setIsOpenStore] = useState<boolean>(false);

  /*----- func -----*/
  // 아이템 목록보기 버튼 클릭시
  const onItemListViewBtnClick = useCallback(() => {
    setIsOpenStore((prev: boolean) => !prev);
  }, []);

  // 아이템 삭제버튼 클릭시
  const onItemDelBtnClick = useCallback(
    (el: selectItemType) => {
      selectItemStore.delSelectItem(el);
    },
    [selectItemStore]
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: 30,
      }}
    >
      <button
        style={{
          backgroundColor: "#DEF5E5",
          fontWeight: "bold",
          width: 200,
          height: 40,
          borderRadius: 20,
          border: "2px solid #8EC3B0",
          cursor: "pointer",
        }}
        onClick={onItemListViewBtnClick}
        onMouseOver={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          (event.target as HTMLButtonElement).style.backgroundColor = "#fff";
        }}
        onMouseLeave={(
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => {
          (event.target as HTMLButtonElement).style.backgroundColor = "#DEF5E5";
        }}
      >
        저장목록보기
      </button>
      {isOpenStore && (
        <div
          style={{
            marginTop: 30,
            width: 200,
            height: 500,
            overflowY: "scroll",
          }}
        >
          {selectItemStore
            .getSelectItem()
            .map((el: selectItemType, i: number) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: el.bgColor,
                    color: "#fff",
                    padding: 5,
                    margin: 5,
                  }}
                  key={`${el.code}_${i}`}
                >
                  <div style={{ fontWeight: "bold" }}>{`NO.${
                    el.id.split("_")[1]
                  }`}</div>
                  <div style={{ marginRight: 5 }}>{el.name}</div>
                  <button onClick={() => onItemDelBtnClick(el)}>삭제</button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
