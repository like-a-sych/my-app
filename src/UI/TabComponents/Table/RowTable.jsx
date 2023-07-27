import { memo } from "react";

import style from "./Table.module.scss";

function RowTable({
	item,
	setModalState,
	checkboxHandler,
	isChecked,
	modalId,
	columns,
}) {
	const rowData = columns.map(element => element.selector(item));

	function clickBtn() {
		setModalState({
			isOpen: true,
			data: item,
			idModal: modalId,
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

			{rowData.map((el, index) => {
				//TODO index заменить на нормальный ключ
				return el ? <td key={index}>{el}</td> : null;
			})}
		</tr>
	);
}

export default memo(RowTable, (prevProps, nextProps) => {
	return prevProps.isChecked === nextProps.isChecked;
});
