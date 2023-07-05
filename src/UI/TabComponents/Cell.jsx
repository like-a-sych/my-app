import { Fragment, useContext, useEffect, useState } from "react";
import style from "./Table.module.scss";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { MainContext } from '../../context/index';

const checkId = (arr, id) => arr.includes(id); //функция для проверки существования id поля в массиве

export default function Cell({id,category,subcategory, brand, purchase, cashback}) {
 
	const {checkedItemsArray, setOpenModal, checkboxHandler, } = useContext(MainContext) 
	const [selfCheck, setSelfChecked] = useState(checkId(checkedItemsArray, id)); //принимает в начальное состояние true или false, чтобы запоминать
																																								// выбор элементов на которых стоит checkbox=true

	useEffect(() => {
		setSelfChecked(checkId(checkedItemsArray, id)) // обновляет состояние чекбокса, когда в массив добавляется или убирается id поля
	}, [checkedItemsArray, id])
	
  function clickBtn() {
			console.log(`Клик по строке`)
			
  }
	function clickCheckbox() { 
			setSelfChecked(!selfCheck);
			checkboxHandler(id)
			// if (checkedItemsArray.length === 1 && selfCheck === true) {
			// 		setOpenModal(false)
			// } else {
			// 	setOpenModal(true)
			// }
	}

  return (
    <Fragment>
      <tr className={selfCheck && style["_active"]} onClick={clickBtn}>
        <td>
          <input
						checked={selfCheck}
            type="checkbox"
            id={id}
            className={style["content-sales-table__checkbox"]}
						onChange={clickCheckbox}
          />
          <label
            className={style["content-sales-table__label"]}
            htmlFor={id}
          ></label>
        </td>
        <td>{category}</td>
        <td>{subcategory}</td>
        <td>{brand}</td>
        <td data-tooltip-id={id} data-tooltip-content={purchase}>
          {purchase}
        </td>
        <td>{cashback}</td>
      </tr>
      {/* <Tooltip id={id} /> */}
    </Fragment>
  );
}
