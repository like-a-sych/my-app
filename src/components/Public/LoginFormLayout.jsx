import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { pathNames } from "../../constants/path";
import Input from "../../UI/Form/Input/Input";
import Button from "../../UI/Form/Button/Button";
import RememberMe from "../../UI/Form/RememberMe/RememberMe";
import style from "./LoginFormLayout.module.scss";

export default function LoginFormLayout({ authData }) {
	const [errorMessage, setErrorMessage] = useState("");
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();
	const fromPage = location.state?.from?.pathname || "/";
	const isReg = location.pathname === "/auth/register";

	const loginUrl = "https://myshop-api.onrender.com/api/user/login";
	const registrationUrl =
		"https://myshop-api.onrender.com/api/user/registration";

	async function handlerSubmitForm(event) {
		event.preventDefault();
		try {
			let response = await axios.post(loginUrl, {
				username: event.target.email.value,
				password: event.target.password.value,
			});
			console.log(response);
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
					console.log(response.data.token);
					setUser(response.data.token);
					event.target.reset();
				})
				.catch(error => {
					if (error.response.data.message.errors) {
						let errMess = error.response.data.message.errors;
						errMess.forEach(element => {
							console.log(element.msg);
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
	useEffect(() => {
		if (user) {
			console.log("ya tut");
			authData.setAuth(true);
			navigate(fromPage, { replace: false });
			console.log(user, fromPage, authData.isAuth);
		}
	}, [user, authData.setAuth, fromPage, navigate, authData.isAuth]);
	return (
		<>
			{`откуда пришел ${fromPage}`}
			<div className={style.mainForm}>
				<div className={style.mainForm__container}>
					<div className={style.mainForm__header}>
						<h3 className={style.mainForm__title}>
							{isReg ? "Создание учетной записи" : "Вход в учётную запись"}
						</h3>
					</div>
					<div className={style.mainForm__body}>
						<form
							className={style.mainForm__form}
							onSubmit={isReg ? handlerRegistration : handlerSubmitForm}
						>
							<div className={style["mainForm__form-wrapper"]}>
								<Input
									id={"email"}
									fieldType={"email"}
									hasLabel={true}
									labelText={"E-mail"}
									placeholder={"Введите свой e-mail"}
								/>
								<Input
									id={"password"}
									fieldType={"password"}
									hasLabel={true}
									labelText={"Пароль"}
									placeholder={"Введите свой пароль"}
								/>
								{isReg && (
									<Input
										id={"passwordRepeat"}
										fieldType={"password"}
										hasLabel={true}
										labelText={"Повторите пароль"}
										placeholder={"Повторите пароль"}
									/>
								)}
							</div>
							{!isReg && <RememberMe />}
							<div className={style["mainForm__buttons-wrapper"]}>
								<span className={style.mainForm__error}>{errorMessage}</span>
								<div className={style.mainForm__button}>
									{isReg ? (
										<Button typeButton={"submit"} nameButton={"Регистрация"} />
									) : (
										<Button typeButton={"submit"} nameButton={"Войти"} />
									)}
								</div>
								<div className={style.mainForm__button}>
									{isReg ? (
										<Link
											to={pathNames.login}
											aria-label="login"
											className={style.mainForm__register}
										>
											У меня уже есть аккаунт
										</Link>
									) : (
										<Link
											to={pathNames.register}
											aria-label="register"
											className={style.mainForm__register}
										>
											У меня еще нет аккаунта
										</Link>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
