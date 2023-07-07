import { Fragment, useContext, useEffect, useState } from "react";
import { MainContext } from '../../context/index';
import style from "./Table.module.scss";

const checkId = (arr, id) => arr.includes(id); //функция для проверки существования id поля в массиве

export default function Cell({id,category,subcategory, brand, purchase, cashback, setChecked, setModalState}) {
	
	const {checkedItemsArray, checkboxHandler} = useContext(MainContext) 
	const [selfCheck, setSelfChecked] = useState(checkId(checkedItemsArray, id)); //принимает в начальное состояние true или false, чтобы запоминать
																																								// выбор элементов на которых стоит checkbox=true

	useEffect(() => {
		setSelfChecked(checkId(checkedItemsArray, id)) // обновляет состояние чекбокса, когда в массив добавляется или убирается id поля
	}, [checkedItemsArray, id])
	
  function clickBtn() {
		setModalState('testComponent');
  }
	function clickCheckbox() { 
			setSelfChecked(!selfCheck);
			checkboxHandler(id);
			setChecked(false);
	}

  return (
    <Fragment>
      <tr className={selfCheck ? style["_active"] : undefined} onClick={clickBtn}>
        <td>
					<div className={style['content-sales-table__wrapper']} onClick={(e) => {e.stopPropagation()}}>
          <input
						checked={selfCheck}
            type="checkbox"
            id={id}
            className={style["content-sales-table__checkbox"]}
						onChange={clickCheckbox}
						onClick={(e) => e.stopPropagation()}
          />
          <label
            className={style["content-sales-table__label"]}
            htmlFor={id}
          ></label>
					</div>
        </td>
        <td>{category}</td>
        <td>{subcategory}</td>
        <td>{brand}</td>
        <td>{purchase}</td>
        <td>{cashback}</td>
      </tr>

    </Fragment>
		
  );
}
