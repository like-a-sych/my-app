import { useState } from "react";
import { MainContext } from "./context/index";

import Main from "./components/Main";
import Modal from "./UI/Modal/Modal";

function App() {
	const [modalState, setModalState] = useState(""); //состояние для переиспользуемого модального окна
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup

	return (
		<MainContext.Provider
			value={{
				setOpenPopup,
				openPopup,
				modalState,
				setModalState,
			}}
		>
			<div id="root">
				<Main />
			</div>
			<Modal componentId={modalState} setModalId={setModalState} />
		</MainContext.Provider>
	);
}

export default App;
