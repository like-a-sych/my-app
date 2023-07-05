import { Fragment, useContext, useState } from "react";
import style from "./Table.module.scss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { MainContext } from '../../context/index';

const checkId = (arr, id) => arr.includes(id);

export default function Cell({...props}) {
 
	const {checkedItemsArray, setOpenModal, checkboxHandler} = useContext(MainContext)

	const [selfCheck, setSelfChecked] = useState(checkId(checkedItemsArray, props.id));


	
  function clickBtn() {
			console.log(`Клик по строке`)
			
  }
	function clickCheckbox() {
			setSelfChecked(!selfCheck);
			checkboxHandler(props.id)
			if (checkedItemsArray.length === 1 && selfCheck === true) {
					setOpenModal(false)
			} else {
				setOpenModal(true)
			}
	}

  return (
    <Fragment>
      <tr className={selfCheck && style["_active"]} onClick={clickBtn}>
        <td>
          <input
						checked={selfCheck}
            type="checkbox"
            id={props.id}
            className={style["content-sales-table__checkbox"]}
						onChange={clickCheckbox}
          />
          <label
            className={style["content-sales-table__label"]}
            htmlFor={props.id}
          ></label>
        </td>
        <td>{props.category}</td>
        <td>{props.subcategory}</td>
        <td>{props.brand}</td>
        <td data-tooltip-id={props.id} data-tooltip-content={props.purchase}>
          {props.purchase}
        </td>
        <td>{props.cashback}</td>
      </tr>
      <Tooltip id={props.id} />
    </Fragment>
  );
}
