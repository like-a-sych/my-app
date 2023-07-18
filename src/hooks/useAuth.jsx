import { useEffect, useState } from "react";

export function useAuth() {
	const [isAuth, setAuth] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const registerUsers = JSON.parse(
		localStorage.getItem("mockUsers") ??
			'[{"login":"admin@admin","password":"admin"}]'
	);

	const [registration, setRegistration] = useState(false);

	console.log(registration);

	function handlerSubmitForm(event) {
		event.preventDefault();
		switch (registration) {
			case false:
				for (let i = 0; registerUsers.length > i; i++) {
					if (
						registerUsers[i].login === event.target.email.value &&
						registerUsers[i].password === event.target.password.value
					) {
						localStorage.setItem("isAuth", true);
						return setAuth(true);
					}
				}
				console.log(event.target.email.value, event.target.password.value);
				event.target.reset();
				setErrorMessage("Неверные учетные данные");
				break;
			case true:
				for (let i = 0; registerUsers.length > i; i++) {
					if (registerUsers[i].login === event.target.email.value) {
						event.target.reset();
						return setErrorMessage("Такой пользователь уже зарегистрирован");
					}
				}
				if (event.target.email.value.length !== 0) {
					localStorage.setItem(
						"mockUsers",
						JSON.stringify([
							...registerUsers,
							{
								login: event.target.email.value,
								password: event.target.password.value,
							},
						])
					);
					event.target.reset();
					setRegistration(false);
					setErrorMessage("");
				} else {
					setErrorMessage("Поля не должны быть пустыми");
				}
				break;
			default:
				console.log("не отрабатывает");
		}
	}

	function handleLogout() {
		setErrorMessage("");
		localStorage.removeItem("isAuth");
		setAuth(false);
		setRegistration(false);
	}

	useEffect(() => {
		if (localStorage.getItem("isAuth") === null) {
			setAuth(false);
		}
	}, [isAuth, registration, registerUsers]);

	return {
		setAuth,
		isAuth,
		handleLogout,
		handlerSubmitForm,
		errorMessage,
		setRegistration,
		registration,
	};
}
