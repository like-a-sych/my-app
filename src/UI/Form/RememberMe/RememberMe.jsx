import style from "./RememberMe.module.scss";

export default function RememberMe() {
	return (
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
	);
}
