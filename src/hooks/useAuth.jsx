import { useEffect, useState } from "react";

export function useAuth() {
	const [isAuth, setAuth] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");
	const [fieldType, setFieldType] = useState("password");
	const registerUsers = JSON.parse(
		localStorage.getItem("mockUsers") ??
			'[{"login":"admin@admin","password":"admin"}]'
	);
	const [registerFields, setRegisterFields] = useState({
		fieldsVisible: true,
		textButton: "Войти",
		registerText: "У меня еще нет аккаунта",
		title: "Вход в учётную запись",
	});

	function showPassword() {
		if (fieldType === "password") {
			setFieldType("text");
		} else {
			setFieldType("password");
		}
	}

	function handlerRegister(event) {
		switch (registerFields.fieldsVisible) {
			case true:
				event.preventDefault();
				setErrorMessage("");
				setRegisterFields({
					title: "Создание учетной записи",
					textButton: "Регистрация",
					registerText: "У меня уже есть аккаунт",
					fieldsVisible: false,
				});
				break;
			case false:
				event.preventDefault();
				setErrorMessage("");
				setRegisterFields({
					title: "Вход в учётную запись",
					textButton: "Войти",
					registerText: "У меня еще нет аккаунта",
					fieldsVisible: true,
				});
				break;
			default:
				console.log("не отрабатывает");
		}
	}

	function handlerSubmitForm(event) {
		event.preventDefault();
		switch (registerFields.fieldsVisible) {
			case true:
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
			case false:
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
					setRegisterFields({
						textButton: "Войти",
						title: "Вход в учётную запись",
						fieldsVisible: true,
					});
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
		registerFields.fieldsVisible = true;
	}

	useEffect(() => {
		if (localStorage.getItem("isAuth") === null) {
			setAuth(false);
		}
	}, [isAuth, registerFields]);

	return {
		setAuth,
		isAuth,
		handleLogout,
		handlerSubmitForm,
		errorMessage,
		registerFields,
		handlerRegister,
		showPassword,
		fieldType,
	};
}
