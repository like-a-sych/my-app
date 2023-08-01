import style from "../Checkbox.module.scss";

export default function TheadCheckbox({ isChecked, allClick }) {
	return (
		<th className={style["thead-checkbox"]}>
			<input
				checked={isChecked}
				type="checkbox"
				id="checkAll"
				className={style["content-sales-table__checkbox"]}
				onChange={allClick}
			/>
			<label
				className={style["content-sales-table__label"]}
				htmlFor="checkAll"
			></label>
		</th>
	);
}
