import style from "./InputDelete.module.scss";

export default function InputDeleteBlock({
	value1,
	value2,
	placeholder1,
	placeholder2,
}) {
	return (
		<>
			<input
				className={style["input"]}
				type="text"
				value={value1}
				placeholder={placeholder1}
				onChange={() => {}} // TODO: fix mock callback
			></input>
			<input
				className={style["input"]}
				type="text"
				value={value2}
				placeholder={placeholder2}
				onChange={() => {}} // TODO: fix mock callback
			></input>
			<button className={style["button-delete"]}></button>
		</>
	);
}
