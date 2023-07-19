import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pathNames } from "../constants/path";

const loginUrl = "https://myshop-api.onrender.com/api/user/login";
const registrationUrl = "https://myshop-api.onrender.com/api/user/registration";

export function useAuth() {
	const [isAuth, setAuth] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const isReg = location.pathname === "/auth/register";

	const goBack = useCallback(() => {
		navigate(-1);
	}, [navigate]);

	async function handlerSubmitForm(event) {
		event.preventDefault();
		try {
			let response = await axios.post(loginUrl, {
				username: event.target.email.value,
				password: event.target.password.value,
			});
			setUser(response.data);
		} catch (error) {
			setErrorMessage(error.response.data.message);
		}
	}

	function handlerRegistration(event) {
		event.preventDefault();
		if (event.target.password.value === event.target.passwordRepeat.value) {
			axios
				.post(registrationUrl, {
					username: event.target.email.value,
					password: event.target.password.value,
				})
				.then(response => {
					setUser(response.data.token);
					event.target.reset();
				})
				.catch(error => {
					if (error.response.data.message.errors) {
						let errMess = error.response.data.message.errors;
						errMess.forEach(element => {
							setErrorMessage(element.msg);
						});
					} else {
						let errMess = error.response.data.message;
						setErrorMessage(errMess);
					}
				});
		} else {
			setErrorMessage("Введи пароль нормально, ок?");
		}
	}

	function handleLogout() {
		setAuth(!isAuth);
		navigate(pathNames.auth);
	}

	useEffect(() => {
		if (user) {
			setAuth(true);
			goBack();
			setUser(null);
		}
	}, [user, isAuth, goBack]);

	return {
		errorMessage,
		isReg,
		handlerSubmitForm,
		handlerRegistration,
		setAuth,
		isAuth,
		handleLogout,
	};
}
