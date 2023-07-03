import { useState } from "react";
import style from "./Table.module.scss";

export default function Cell(props) {
  const [isChecked, setChecked] = useState(false);

  function clickBtn() {
    setChecked((prevState) => !prevState);
  }

  return (
    <tr className={isChecked && style["_active"]} onClick={clickBtn}>
      <td>
        <input
          defaultChecked={isChecked}
          type="checkbox"
          id={props.id}
          checked={isChecked}
          className={style["content-sales-table__checkbox"]}
        />
        <label
          className={style["content-sales-table__label"]}
          htmlFor={props.id}
        ></label>
      </td>
      <td>{props.category}</td>
      <td>{props.subcategory}</td>
      <td>{props.brand}</td>
      <td>{props.purchase}</td>
      <td>{props.cashback}</td>
    </tr>
  );
}
