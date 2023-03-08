import { useState } from "react";
import {
  DragDropContext,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
} from "react-beautiful-dnd";
import { color } from "../type/color";
import { dragItemListType, selectBtnType } from "../type/type";

// props
type SingleDNDProps = {
  direction: selectBtnType["direction"];
};
export default function SingleDND({ direction }: SingleDNDProps) {
  // 드래그 아이템 목록
  const [dragItemList, setDragItemList] = useState<dragItemListType[]>(() => {
    return [
      { seq: 1, content: "Item_1" },
      { seq: 2, content: "Item_2" },
      { seq: 3, content: "Item_3" },
      { seq: 4, content: "Item_4" },
      { seq: 5, content: "Item_5" },
    ];
  });

  // 아이템 드랍 후 결과 재정렬
  function reorder(
    list: dragItemListType[], // 아이템 목록
    startIndex: number, // 아이템 위치
    endIndex: number // 아이템 추가 위치
  ): dragItemListType[] {
    const result: dragItemListType[] = Array.from(list); // 새로운 아이템 목록
    const [removed]: dragItemListType[] = result.splice(startIndex, 1); // 아이템 위치에 있던 아이템
    result.splice(endIndex, 0, removed); // 아이템 추가위치에 아이템 추가
    return result;
  }

  // 드래그 종료시
  function onDragEnd(result: DropResult) {
    // 영역 밖으로 드랍한 경우
    if (!result.destination) {
      return;
    }

    // 재정렬된 아이템 목록
    const newItemList: dragItemListType[] = reorder(
      dragItemList,
      result.source.index,
      result.destination.index
    );

    setDragItemList(newItemList);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" direction={direction}>
        {(
          droppableProvided: DroppableProvided,
          snapshot: DroppableStateSnapshot
        ) => {
          return (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              style={{
                width: "50%",
                backgroundColor: snapshot.isDraggingOver // drag 끝인 경우
                  ? color.dndAreaGrab
                  : color.dndArea,
                padding: 10,
                display: "flex",
                flexDirection: direction === "vertical" ? "column" : "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {dragItemList.map((item: dragItemListType, i: number) => (
                <Draggable
                  key={item.seq}
                  draggableId={String(item.seq)}
                  index={i}
                >
                  {(
                    draggableProvided: DraggableProvided,
                    snapshot: DraggableStateSnapshot
                  ) => {
                    return (
                      <div
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        style={{
                          width: "100%",
                          height: 30,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid gray",
                          color: color.dndItemName,
                          backgroundColor: snapshot.isDragging
                            ? color.dndItemGrab
                            : color.dndItem,
                          margin: 5,
                          ...draggableProvided.draggableProps.style,
                        }}
                      >
                        <div {...draggableProvided.dragHandleProps}>
                          {item.content}
                        </div>
                      </div>
                    );
                  }}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
}
