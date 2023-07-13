import { useEffect, useState } from "react";
import { mockUsers } from "../constants/mocks";

export function useAuth() {
	const [isAuth, setAuth] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	const [registerFields, setRegisterFields] = useState({
		fieldsVisible: true,
		textButton: "Войти",
		title: "Вход в учётную запись",
	});

	function handlerRegister(event) {
		event.preventDefault();
		setRegisterFields({
			title: "Регистрация учётной записи",
			textButton: "Зарегистрироваться",
			fieldsVisible: false,
		});
	}

	function handlerSubmitForm(event) {
		event.preventDefault();
		mockUsers.forEach(user => {
			if (
				user.login === event.target.email.value &&
				user.password === event.target.password.value
			) {
				setAuth(true);
				localStorage.setItem("isAuth", true);
				setAuth(true);
			} else {
				setErrorMessage("Неверные учетные данные");
				event.target.reset();
			}
		});
	}

	function handleLogout() {
		localStorage.removeItem("isAuth");
		setAuth(false);
	}

	useEffect(() => {
		if (localStorage.getItem("isAuth") === null) {
			setAuth(false);
		}
	}, [isAuth]);

	return {
		setAuth,
		isAuth,
		handleLogout,
		handlerSubmitForm,
		errorMessage,
		registerFields,
		handlerRegister,
	};
}
