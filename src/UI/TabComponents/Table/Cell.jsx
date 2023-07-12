import { memo } from "react";

import style from "./Table.module.scss";

function Cell({ item, setModalState, checkboxHandler, isChecked }) {
	const { id, cashback, purchase, category, subcategory, brand } = item;

	function clickBtn() {
		setModalState("testComponent");
	}
	function clickCheckbox() {
		checkboxHandler(id);
	}

	return (
		<tr className={isChecked ? style["_active"] : undefined} onClick={clickBtn}>
			<td>
				<div
					className={style["content-sales-table__wrapper"]}
					onClick={e => {
						e.stopPropagation();
					}}
				>
					<input
						checked={isChecked}
						type="checkbox"
						id={id}
						className={style["content-sales-table__checkbox"]}
						onChange={clickCheckbox}
						onClick={e => e.stopPropagation()}
					/>
					<label
						className={style["content-sales-table__label"]}
						htmlFor={id}
					></label>
				</div>
			</td>
			<td>{category}</td>
			<td>{subcategory}</td>
			<td>{brand}</td>
			<td>{purchase}</td>
			<td>{cashback}</td>
		</tr>
	);
}

export default memo(Cell, (prevProps, nextProps) => {
	return prevProps.isChecked === nextProps.isChecked;
});
