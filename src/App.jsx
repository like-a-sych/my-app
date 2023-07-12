import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from "./context/index";
import Router from "./components/MainContent/Router";
import Modal from "./UI/Modal/Modal";

function App() {
	const [modalState, setModalState] = useState(""); //состояние для переиспользуемого модального окна

	return (
		<MainContext.Provider value={{ modalState, setModalState }}>
			<BrowserRouter>
				<Router />
				<Modal componentId={modalState} setModalId={setModalState} />
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
