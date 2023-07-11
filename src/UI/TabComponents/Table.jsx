import { useContext } from "react";
import { MainContext } from "../../context/index";
import Cell from "./Cell";
import style from "./Table.module.scss";

export default function Table({
	cellArray,
	checkedItemsArray,
	setCheckedItemsArray,
}) {
	const isChecked =
		checkedItemsArray.length && checkedItemsArray.length === cellArray.length;

	const { setModalState } = useContext(MainContext);

	function checkboxHandler(id) {
		//обработчик для добавления чекбокса одному полю отображаемой таблицы
		setCheckedItemsArray(prev => {
			if (prev.includes(id)) {
				return prev.filter(item => item !== id);
			} else {
				return [...prev, id];
			}
		});
		//фильтруем массив и возвращаем новый без находящегося в нем id
		//иначе если id в массиве нет, разворачиваем старый массив и добавляем туда новый id
	}

	function allClick() {
		const newArr = cellArray.map(item => item.id); // создаем новый массив в который помещаем все id полей отображаемой таблицы

		if (newArr.length === checkedItemsArray.length) {
			// если массив выбранных полей таблицы равен выбранным полям по одному
			return setCheckedItemsArray([]); // то сбрасываем значение массива до пустого
		}
		setCheckedItemsArray(newArr); //иначе добавляем оставшиеся поля таблицы в массив
	}

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
				{cellArray.map(item => {
					const isChecked = checkedItemsArray.includes(item.id); //функция для проверки существования id поля в массиве
					// выводим отсортированный по длине массив со всеми данными в таблицу
					return (
						<Cell
							key={item.id}
							item={item}
							setModalState={setModalState}
							checkboxHandler={checkboxHandler}
							isChecked={isChecked}
						/>
					);
				})}
			</tbody>
		</table>
	);
}
