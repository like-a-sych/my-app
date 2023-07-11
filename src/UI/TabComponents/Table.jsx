import { useContext } from "react";
import { MainContext } from "../../context/index";
import Cell from "./Cell";
import style from "./Table.module.scss";

export default function Table() {
	const { setModalState, tableState, setTableState } = useContext(MainContext);

	function allClick() {
		const newArr = tableState.cellArray.map(item => item.id); // создаем новый массив в который помещаем все id полей отображаемой таблицы

		if (newArr.length === tableState.checkedItemsArray.length) {
			// если массив выбранных полей таблицы равен выбранным полям по одному
			return setTableState(prev => ({
				...prev,
				checkedItemsArray: [],
			})); // то сбрасываем значение массива до пустого
		}
		setTableState(prev => ({
			...prev,
			checkedItemsArray: newArr,
		})); //иначе добавляем оставшиеся поля таблицы в массив
	}
	const isChecked =
		tableState.checkedItemsArray.length === tableState.cellArray.length;

	return (
		<table className={style["content-sales-table"]}>
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
					<th>Категория</th>
					<th>Подкатегория</th>
					<th>Бренд</th>
					<th>Товары</th>
					<th>Кешбек</th>
				</tr>
			</thead>
			<tbody className={style["content-sales-table__body"]}>
				{tableState.cellArray.map(item => (
					// выводим отсортированный по длине массив со всеми данными в таблицу
					<Cell
						key={item.id}
						id={item.id}
						category={item.category}
						subcategory={item.subcategory}
						brand={item.brand}
						purchase={item.purchase}
						cashback={item.cashback}
						setModalState={setModalState}
					/>
				))}
			</tbody>
		</table>
	);
}
