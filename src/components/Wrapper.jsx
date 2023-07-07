import { BrowserRouter } from "react-router-dom";
import Aside from "./Aside/Aside";
import MainContent from "./MainContent/MainContent";
import style from "./Wrapper.module.scss";

function Wrapper() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <BrowserRouter>
          <Aside />
          <MainContent  />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Wrapper;
