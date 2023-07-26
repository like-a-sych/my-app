import style from "./ModalButton.module.scss";

export default function ModalButton({ textButton }) {
	return (
		<div className={style["header-button__item"]}>
			<button type="button">{textButton}</button>
		</div>
	);
}
