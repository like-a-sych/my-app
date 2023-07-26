import style from "./Table.module.scss";

export default function TableHead({ isChecked, allClick, theadList }) {
	return (
		<thead className={style["content-sales-table__header"]}>
			<tr>
				<th>
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
				{theadList.map(item => (
					<th key={item}>{item}</th>
				))}
			</tr>
		</thead>
	);
}
