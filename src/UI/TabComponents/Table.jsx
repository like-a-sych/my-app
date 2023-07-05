import style from "./Table.module.scss";
import Cell from "./Cell";
import { MainContext } from "../../context/index";
import { useContext } from "react";

export default function Table({ showTableCell, sliceArray }) {
	const {isChecked, checkboxHandler, checkedItemsArray} = useContext(MainContext)

	function allClick() {
		console.log(sliceArray(showTableCell))
		sliceArray(showTableCell).forEach(element => {
			console.log(element.id)
			checkboxHandler(element.id)
		});
	}

  return (
    <table className={style["content-sales-table"]}>
      <thead className={style["content-sales-table__header"]}>
        <tr>
          <th>
            <input
							ckecked={isChecked}
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
          // выводим массив со всеми данными в таблицу
          <Cell
						check={isChecked}
            key={item.id}
            id={item.id}
            category={item.category}
            subcategory={item.subcategory}
            brand={item.brand}
            purchase={item.purchase}
            cashback={item.cashback}
          />
        ))}
      </tbody>
    </table>
  );
}
