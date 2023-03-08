import { useMemo, useState } from "react";
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
import { dragAreaType, dragItemListType, selectBtnType } from "../type/type";

// props
type MutiDNDProps = {
  direction: selectBtnType["direction"];
};
export default function MutiDND({ direction }: MutiDNDProps) {
  // 드래그 아이템 목록
  const dragItemList = useMemo<dragItemListType[]>(() => {
    return [
      { seq: 1, content: "Item_1" },
      { seq: 2, content: "Item_2" },
      { seq: 3, content: "Item_3" },
      { seq: 4, content: "Item_4" },
      { seq: 5, content: "Item_5" },
    ];
  }, []);

  // 드래그 영역 목록 초기값
  const inItDragArea: { [area: string]: dragAreaType } = {
    area1: {
      name: "영역1",
      items: dragItemList,
    },
    area2: {
      name: "영역2",
      items: [],
    },
    area3: {
      name: "영역3",
      items: [],
    },
  };

  // 드래그 영역 목록
  const [dragArea, setDragArea] = useState<{ [area: string]: dragAreaType }>(
    inItDragArea
  );

  // 드래그 종료시
  function onDragEnd(result: DropResult) {
    // 영역 밖으로 드랍한 경우
    if (!result.destination) {
      return;
    }

    // 다른 영역에 드랍한 경우 (source: 기존영역, destination: 도달영역)
    if (result.source.droppableId !== result.destination.droppableId) {
      const sourceDragArea = dragArea[result.source.droppableId]; // 기존영역의 dragAreaType
      const destDragArea = dragArea[result.destination.droppableId]; // 도달영역의 dragAreaType
      const sourceItems = [...sourceDragArea.items]; // 기존영역에 속한 아이템
      const destItems = [...destDragArea.items]; // 도달영역에 속한 아이템
      const [removed] = sourceItems.splice(result.source.index, 1); // 기존영역에서 선택한 아이템 제거
      destItems.splice(result.destination.index, 0, removed); // 도달영역에서 추가위치에 선택한 아이템 추가
      // 영역별 아이템 재설정
      setDragArea({
        ...dragArea,
        [result.source.droppableId]: {
          ...sourceDragArea,
          items: sourceItems,
        },
        [result.destination.droppableId]: {
          ...destDragArea,
          items: destItems,
        },
      });
    }
    // 같은 영역에 드랍한 경우
    else {
      const sourceDragArea = dragArea[result.source.droppableId]; // 같은영역의 dragAreaType
      const arrangSourceDragArea = [...sourceDragArea.items]; // 같은영역에 속한 아이템
      const [removed] = arrangSourceDragArea.splice(result.source.index, 1); // 같은영역에서 선택한 아이템 제거
      arrangSourceDragArea.splice(result.destination.index, 0, removed); // 같은영역에서 추가위치에 아이템 추가
      // 영역별 아이템 재설정
      setDragArea({
        ...dragArea,
        [result.source.droppableId]: {
          ...sourceDragArea,
          items: arrangSourceDragArea,
        },
      });
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: direction === "vertical" ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Object.entries(dragArea).map((el: [string, dragAreaType]) => {
          const area: string = el[0]; // dragArea 속성명
          const areaInfo: dragAreaType = el[1]; // 영역의 아이템정보
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
                padding: 10,
              }}
              key={area}
            >
              {/* areaName */}
              <div>{areaInfo.name}</div>

              {/* areaItem */}
              <Droppable droppableId={area} direction={direction}>
                {(
                  droppableProvided: DroppableProvided,
                  snapshot: DroppableStateSnapshot
                ) => {
                  return (
                    <div
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                      style={{
                        width: "100%",
                        padding: 10,
                        backgroundColor: snapshot.isDraggingOver // drag 끝인 경우
                          ? color.dndAreaGrab
                          : color.dndArea,
                        display: "flex",
                        flexDirection:
                          direction === "vertical" ? "column" : "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* 빈 영역의 경우 공간표시를 위함 */}
                      {areaInfo.items.length === 0 && (
                        <div style={{ height: 30 + 5 + 5 + 1 + 1 }}></div>
                      )}
                      {areaInfo.items.map(
                        (item: dragItemListType, i: number) => {
                          return (
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
                          );
                        }
                      )}
                      {droppableProvided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}
