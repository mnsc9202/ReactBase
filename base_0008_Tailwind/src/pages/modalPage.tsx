import { useCallback, useState } from "react";
import Modal from "../component/customModal";

export default function ModalPage() {
  // 팝업 open 여부
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // 팝업>확인 클릭시
  const onConfirmBtnClick = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <>
      {/* 팝업열기 버튼 */}
      <div className="flex items-center justify-center ">
        <button
          className="bg-amber-400 text-white p-2"
          onClick={() => setIsModalOpen((prev: boolean) => !prev)}
        >
          팝업열기
        </button>
      </div>

      {/* 팝업 */}
      <Modal isOpen={isModalOpen}>
        {/* wrapper */}
        <div className="bg-white flex flex-col items-center justify-between max-h-[200px] h-full">
          {/* 내용 */}
          <div className="h-full flex items-center justify-center p-5">
            <div>팝업내용을 확인해주세요</div>
          </div>

          {/* 확인버튼 */}
          <button
            className="p-2 w-full bg-amber-400 flex items-center justify-center"
            onClick={onConfirmBtnClick}
          >
            확인
          </button>
        </div>
      </Modal>
    </>
  );
}
