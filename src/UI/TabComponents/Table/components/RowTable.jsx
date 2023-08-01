import { memo } from "react";

import RowCheckbox from "./RowCheckbox/RowCheckbox";

import style from "../Table.module.scss";

function RowTable({
	item,
	setModalState,
	checkboxHandler,
	isChecked,
	idModal,
	columns,
	hasCheckbox,
}) {
	const rowData = columns.map(element => element.selector(item));

	function clickBtn() {
		setModalState({
			isOpen: true,
			data: item,
			idModal,
		});
	}

	function clickCheckbox() {
		checkboxHandler(item.id);
	}

	return (
		<tr className={isChecked ? style["_active"] : undefined} onClick={clickBtn}>
			{hasCheckbox && (
				<RowCheckbox
					isChecked={isChecked}
					id={item.id}
					clickCheckbox={clickCheckbox}
				/>
			)}
			{rowData.map((el, index) => {
				return <td key={`${index}-${el.name}${Math.random()}`}>{el}</td>;
			})}
		</tr>
	);
}

export default memo(RowTable, (prevProps, nextProps) => {
	return prevProps.isChecked === nextProps.isChecked;
});
