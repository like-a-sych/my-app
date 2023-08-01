import TheadCheckbox from "./TheadCheckbox/TheadCheckbox";

import style from "../Table.module.scss";

export default function TableHead({
	isChecked,
	allClick,
	theadList,
	hasCheckbox,
}) {
	return (
		<thead className={style["content-sales-table__header"]}>
			<tr>
				{hasCheckbox && (
					<TheadCheckbox isChecked={isChecked} allClick={allClick} />
				)}
				{theadList.map(item => (
					<th key={item}>{item}</th>
				))}
			</tr>
		</thead>
	);
}
