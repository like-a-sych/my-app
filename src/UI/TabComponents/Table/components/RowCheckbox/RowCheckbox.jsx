import style from "../Checkbox.module.scss";

function stopProp(e) {
	e.stopPropagation();
}

export default function RowCheckbox({ isChecked, clickCheckbox, id }) {
	return (
		<td onClick={stopProp}>
			<div className={style["content-sales-table__wrapper"]}>
				<input
					checked={isChecked}
					type="checkbox"
					id={id}
					className={style["content-sales-table__checkbox"]}
					onChange={clickCheckbox}
				/>
				<label
					className={style["content-sales-table__label"]}
					htmlFor={id}
				></label>
			</div>
		</td>
	);
}
