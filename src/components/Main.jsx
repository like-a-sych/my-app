import { BrowserRouter } from "react-router-dom";
import Aside from "./Aside/Aside";
import Router from "./MainContent/Router";
import style from "./Main.module.scss";

function Main() {
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<BrowserRouter>
					<Aside />
					<Router />
				</BrowserRouter>
			</div>
		</div>
	);
}

export default Main;
