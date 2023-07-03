import Aside from "../components/Aside/Aside";
import MainContent from "./_MainContent/MainContent";
import { BrowserRouter } from "react-router-dom";
import style from "./Wrapper.module.scss";
function Wrapper() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <BrowserRouter>
          <Aside />
          <MainContent />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Wrapper;
