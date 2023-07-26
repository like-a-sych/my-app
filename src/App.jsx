import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from "./context";

import Router from "./components/MainContent/Router";
import ModalMainBlock from "./UI/Modal/ModalMainBlock/ModalMainBlock";

function App() {
	const [modalState, setModalState] = useState({
		idModal: "",
		dataCell: {},
		isOpen: false,
	}); //состояние для переиспользуемого модального окна
	return (
		<MainContext.Provider
			value={{
				modalState,
				setModalState,
			}}
		>
			<BrowserRouter>
				<Router />
				<ModalMainBlock modalState={modalState} setModalState={setModalState} />
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
