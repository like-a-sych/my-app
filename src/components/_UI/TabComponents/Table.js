import style from "./Table.module.scss";
import Cell from "./Cell";

export default function Table({ showTableCell, limitCellonPage }) {
  return (
    <table className={style["content-sales-table"]}>
      <thead className={style["content-sales-table__header"]}>
        <tr>
          <th>
            <input
              type="checkbox"
              id="checkAll"
              className={style["content-sales-table__checkbox"]}
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
          <Cell
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
