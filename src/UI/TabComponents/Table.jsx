import style from "./Table.module.scss";
import Cell from "./Cell";
import { MainContext } from "../../context/index";
import { useContext } from "react";

export default function Table({ showTableCell, isChecked, setChecked }) {


	const {checkAllHandler} = useContext(MainContext)

	function allClick() { //функция для выделения всех checkbox в таблице
			setChecked(!isChecked)
			const newArr = showTableCell.map(item => item.id) // создаем новый массив в который помещаем все id полей отображаемой таблицы
			checkAllHandler(newArr) //добавляем новый массив  обработчик проверки выделенных checkbox	
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
        {showTableCell.map((item) => (
          // выводим отсортироанный по длине массив со всеми данными в таблицу
          <Cell
            key={item.id}
            id={item.id}
            category={item.category}
            subcategory={item.subcategory}
            brand={item.brand}
            purchase={item.purchase}
            cashback={item.cashback}
						setChecked={setChecked}
          />
        ))}
      </tbody>
    </table>
  );
}
