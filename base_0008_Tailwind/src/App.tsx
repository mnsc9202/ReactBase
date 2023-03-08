import "./App.css";
import PageContainer from "./component/pageContainer";
import AnimationPage from "./pages/animationPage";
import FontPage from "./pages/fontPage";
import ModalPage from "./pages/modalPage";

function App() {
  return (
    <>
      {/* 폰트 */}
      <PageContainer
        title="폰트 적용하기"
        className="border-[2px] border-container-font"
      >
        <FontPage />
      </PageContainer>

      {/* 팝업 */}
      <PageContainer
        title="팝업 표시하기"
        className="border-[2px] border-container-modal"
      >
        <ModalPage />
      </PageContainer>

      {/* 애니메이션 */}
      <PageContainer
        title="애니메이션 사용하기"
        className="border-[2px] border-container-animation"
      >
        <AnimationPage />
      </PageContainer>
    </>
  );
}

export default App;
