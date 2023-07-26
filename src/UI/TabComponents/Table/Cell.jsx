import { memo } from "react";

import style from "./Table.module.scss";

function Cell({ item, setModalState, checkboxHandler, isChecked }) {
	const tdItems = Object.entries(item);

	function clickBtn() {
		setModalState({
			isOpen: true,
			data: item,
			idModal: "purchaseEdit",
		});
	}

	function clickCheckbox() {
		checkboxHandler(item.id);
	}

	return (
		<tr className={isChecked ? style["_active"] : undefined} onClick={clickBtn}>
			<td
				onClick={e => {
					e.stopPropagation();
				}}
			>
				<div className={style["content-sales-table__wrapper"]}>
					<input
						checked={isChecked}
						type="checkbox"
						id={item.id}
						className={style["content-sales-table__checkbox"]}
						onChange={clickCheckbox}
						onClick={e => e.stopPropagation()}
					/>
					<label
						className={style["content-sales-table__label"]}
						htmlFor={item.id}
					></label>
				</div>
			</td>
			{tdItems.map((el, index) => {
				if (el[0] === "nameFrom1C" || el[0] === "codeFrom1C") {
					return <td key={index}>{el[1]}</td>;
				}
				return null;
			})}
		</tr>
	);
}

export default memo(Cell, (prevProps, nextProps) => {
	return prevProps.isChecked === nextProps.isChecked;
});
