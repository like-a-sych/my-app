import { useEffect, useState } from "react";
import { MainContext } from "./context/index";
import { tableCellsArray } from "./constants/cells";
import Wrapper from "./components/Wrapper";
import Modal from "./UI/Modal/Modal";

function App() {
	const [modalState, setModalState] = useState(""); //состояние для переиспользуемого модального окна
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup
	const [tableState, setTableState] = useState({
		checkedItemsArray: [],
		cellArray: tableCellsArray,
	});

	useEffect(() => {
		// стейт для вызова попапа, когда выделяешь чекбоксы таблицы
		if (tableState.checkedItemsArray.length === 0) {
			setOpenPopup(false);
		} else {
			setOpenPopup(true);
		}
	}, [tableState.checkedItemsArray]);

	return (
		<MainContext.Provider
			value={{
				setOpenPopup,
				openPopup,
				tableState,
				modalState,
				setTableState,
				setModalState,
			}}
		>
			<div id="root">
				<Wrapper />
			</div>
			<Modal componentId={modalState} setModalId={setModalState} />
		</MainContext.Provider>
	);
}

export default App;
