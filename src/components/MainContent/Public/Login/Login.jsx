import { useContext } from "react";
import { MainContext } from "../../../../context";
import style from "./Login.module.scss";

export default function Login() {
	const { handlerSubmitForm, errorMessage, handlerRegister, registerFields } =
		useContext(MainContext);

	return (
		<div className={style.mainForm}>
			<div className={style.mainForm__container}>
				<div className={style.mainForm__header}>
					<h3 className={style.mainForm__title}>{registerFields.title}</h3>
				</div>
				<div className={style.mainForm__body}>
					<form className={style.mainForm__form} onSubmit={handlerSubmitForm}>
						<div className={style["mainForm__form-wrapper"]}>
							<div className={style["mainForm__form-item"]}>
								<label htmlFor="email" className={style.mainForm__label}>
									E-mail
								</label>
								<input
									id="email"
									className={style.mainForm__input}
									type="email"
									placeholder="Введите свой e-mail"
									aria-label="email field"
								/>
							</div>
							<div className={style["mainForm__form-item"]}>
								<label htmlFor="password" className={style.mainForm__label}>
									Пароль
								</label>
								<input
									id="password"
									className={style.mainForm__input}
									type="password"
									placeholder="Введите пароль"
									aria-label="password field"
								/>
							</div>
						</div>
						{registerFields.fieldsVisible && (
							<div className={style.formCheck}>
								<input
									type="checkbox"
									className={style.formCheck__input}
									id="rememberMe"
								></input>
								<label className={style.formCheck__label} htmlFor="rememberMe">
									Запомнить меня
								</label>
							</div>
						)}
						<div className={style["mainForm__buttons-wrapper"]}>
							<span className={style.mainForm__error}>{errorMessage}</span>
							<div className={style.mainForm__button}>
								<button
									type="submit"
									aria-label="submit"
									className={style.mainForm__submit}
								>
									{registerFields.textButton}
								</button>
							</div>
							{registerFields.fieldsVisible && (
								<div className={style.mainForm__button}>
									<button
										onClick={handlerRegister}
										type="button"
										aria-label="register"
										className={style.mainForm__register}
									>
										У меня еще нет аккаунта
									</button>
								</div>
							)}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
