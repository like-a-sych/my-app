import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { MainContext } from "../../context";
import { pathNames } from "../../constants/path";
import Input from "../../UI/Form/Input/Input";
import Button from "../../UI/Form/Button/Button";
import RememberMe from "../../UI/Form/RememberMe/RememberMe";
import style from "./LoginFormLayout.module.scss";

export default function LoginFormLayout() {
	const { handlerSubmitForm, errorMessage, setRegistration } =
		useContext(MainContext);

	const location = useLocation();
	const isReg = location.pathname === "/auth/register";

	return (
		<div className={style.mainForm}>
			<div className={style.mainForm__container}>
				<div className={style.mainForm__header}>
					<h3 className={style.mainForm__title}>
						{isReg ? "Создание учетной записи" : "Вход в учётную запись"}
					</h3>
				</div>
				<div className={style.mainForm__body}>
					<form className={style.mainForm__form} onSubmit={handlerSubmitForm}>
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
										onClick={setRegistration(false)}
										to={pathNames.login}
										aria-label="login"
										className={style.mainForm__register}
									>
										У меня уже есть аккаунт
									</Link>
								) : (
									<Link
										onClick={setRegistration(true)}
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
	);
}
