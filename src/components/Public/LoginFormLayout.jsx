import { Link } from "react-router-dom";

import { pathNames } from "../../constants/path";
import Input from "../../UI/Form/Input/Input";
import Button from "../../UI/Form/Button/Button";
import RememberMe from "../../UI/Form/RememberMe/RememberMe";
import style from "./LoginFormLayout.module.scss";

export default function LoginFormLayout({ authData }) {
	return (
		<>
			<div className={style.mainForm}>
				<div className={style.mainForm__container}>
					<div className={style.mainForm__header}>
						<h3 className={style.mainForm__title}>
							{authData.isReg
								? "Создание учетной записи"
								: "Вход в учётную запись"}
						</h3>
					</div>
					<div className={style.mainForm__body}>
						<form
							className={style.mainForm__form}
							onSubmit={
								authData.isReg
									? authData.handlerRegistration
									: authData.handlerSubmitForm
							}
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
								{authData.isReg && (
									<Input
										id={"passwordRepeat"}
										fieldType={"password"}
										hasLabel={true}
										labelText={"Повторите пароль"}
										placeholder={"Повторите пароль"}
									/>
								)}
							</div>
							{!authData.isReg && <RememberMe />}
							<div className={style["mainForm__buttons-wrapper"]}>
								<span className={style.mainForm__error}>
									{authData.errorMessage}
								</span>
								<div className={style.mainForm__button}>
									{authData.isReg ? (
										<Button typeButton={"submit"} nameButton={"Регистрация"} />
									) : (
										<Button typeButton={"submit"} nameButton={"Войти"} />
									)}
								</div>
								<div className={style.mainForm__button}>
									{authData.isReg ? (
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
