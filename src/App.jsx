import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainContext } from "./context";
import { useAuth } from "./hooks/useAuth";
import Router from "./components/MainContent/Router";
import Modal from "./UI/Modal/Modal";

function App() {
	const [modalState, setModalState] = useState(""); //состояние для переиспользуемого модального окна
	const {
		handleLogout,
		handlerSubmitForm,
		isAuth,
		errorMessage,
		setRegistration,
	} = useAuth();
	return (
		<MainContext.Provider
			value={{
				modalState,
				setModalState,
				handleLogout,
				handlerSubmitForm,
				isAuth,
				errorMessage,
				setRegistration,
			}}
		>
			<BrowserRouter>
				<Router />
				<Modal componentId={modalState} setModalId={setModalState} />
			</BrowserRouter>
		</MainContext.Provider>
	);
}

export default App;
