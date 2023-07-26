import style from "./LabelInput.module.scss";

export default function LabelInput({
	id,
	type,
	value,
	label,
	disable,
	placeholder,
}) {
	return (
		<>
			<label
				htmlFor={id}
				className={
					disable !== undefined ? style["label"] : style["label-before"]
				}
			>
				{label}

				<input
					disabled={disable}
					id={id}
					className={style.input}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={() => {}} // TODO: fix mock callback
				></input>
			</label>
		</>
	);
}
