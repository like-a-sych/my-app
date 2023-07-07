import { useEffect, useState } from "react";
import { MainContext } from './context/index';
import { tableCellsArray } from "./constants/cells";
import Wrapper from "./components/Wrapper";
import Modal from "./UI/Modal/Modal";
import PopUp from "./UI/Modal/PopUp";
import style from './UI/Modal/PopUp.module.scss'

function App() {
	//стейты для таблицы----------------------
	const [isChecked, setChecked] = useState(false); // состояние для чекбоксов в таблице
	const [checkedItemsArray, setCheckedItemsArray] = useState([]); // массив для хранения строк у которых checkbox=true
	const [cellArray, setCellArray] = useState(tableCellsArray); //передаем массив с данными для таблицы
	const [limitCellonPage, setlimitCellonPage] = useState(5); //устанавливаем нижнее значение для отображени контента на странице
	const [pagination, setPagination] = useState({ // устанавливаем пагинацию и лимит отображения контента таблицы
    page: 1,
    limit: limitCellonPage,
  }); 
//--------------------------
	const [modalState, setModalState] = useState(''); //состояние для переиспользуемого модального окна
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состоние popup


	const checkAllHandler = (arr) => { //обработчик для установки checkbox всем или не выбранным отображаемым полям таблицы на странице
		if (arr.length === checkedItemsArray.length) { // если массив выбранных полей таблицы равен выбранным полям по одному
			return setCheckedItemsArray([]); // то сбрасываем значение массива до пустого
		}
		setCheckedItemsArray(arr) //иначе добавляем оставшиеся поля таблицы в массив
	}

	const checkboxHandler = (id) => { //обработчик для добавление чекбокса одному полю отображаемой таблицы
		if (checkedItemsArray.includes(id)) {		//если массив содержит id который в нем находится
				return setCheckedItemsArray(checkedItemsArray.filter(item => item !== id));	//фильтруем массив и возвращаем новый без находящгося в нем id
		}
		setCheckedItemsArray([...checkedItemsArray, id]) //иначе если id в массиве нет, разворачиваем старый массив и добавляем туда новый id
	}

	function sliceArray(table) {
    // передаем массив и режем его (начальная страница - 1  и лимит отображения контента страницы)
    return table.slice(
      Number((pagination.page - 1) * limitCellonPage),
      Number(pagination.limit)
    );
  }

	function deleteCellTable () { //функция для удаления выделенных чекбоксом полей и отрисовки нового массива
			for (let i = 0; i<tableCellsArray.length; i++) {
				if (checkedItemsArray.includes(tableCellsArray[i].id)) {
					tableCellsArray.splice(i, 1);
					i--;
				}
			}
			setCellArray(sliceArray(tableCellsArray));
			setOpenPopup(false)
			setChecked(false)
			setCheckedItemsArray([])
	}

	useEffect( () => { // стейт для вызова попапа, когда выделяешь чекбоксы таблицы
		if (checkedItemsArray.length === 0) {
			setOpenPopup(false)
		} else {
			setOpenPopup(true)
		}
	}, [checkedItemsArray] )

  return (
		<MainContext.Provider  value={{setOpenPopup,
																	openPopup,
																	checkedItemsArray,
																	checkboxHandler, 
																	checkAllHandler, 
																	cellArray, 
																	setCellArray,
																	setCheckedItemsArray,
																	setlimitCellonPage,
																	pagination,
																	setPagination,
																	limitCellonPage,
																	sliceArray,
																	isChecked,
																	setChecked,
																	modalState,
																	setModalState
																	}}>
			<div id="root">
				<Wrapper  />
				{openPopup &&
					<PopUp openPopup={openPopup} setOpenPopup={setOpenPopup}>
						<p className={style.popup__info}>
							Количество выбранных позиций: 
							<span className={style.popup__count}> {checkedItemsArray.length}</span>
						</p>
						<div className={style.popup__button_wrapper}>
							<button onClick={deleteCellTable} type="button" className={style.popup__button}>
								<svg
									width="17"
									height="16"
									viewBox="0 0 17 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="Component 1">
										<path
											id="Vector"
											d="M7.05582 11.5223C6.93194 11.5257 6.81127 11.4826 6.71745 11.4015C6.62362 11.3204 6.56339 11.2071 6.54857 11.0839V7.09815C6.54857 6.96601 6.60096 6.83929 6.69423 6.74586C6.78749 6.65242 6.91398 6.59993 7.04587 6.59993C7.17777 6.59993 7.30426 6.65242 7.39752 6.74586C7.49078 6.83929 7.54318 6.96601 7.54318 7.09815V11.0839C7.53082 11.2045 7.47407 11.3163 7.38398 11.3973C7.29389 11.4784 7.1769 11.5229 7.05582 11.5223ZM10.527 11.0839V7.09815C10.527 6.96601 10.4746 6.83929 10.3813 6.74586C10.2881 6.65242 10.1616 6.59993 10.0297 6.59993C9.89781 6.59993 9.77132 6.65242 9.67805 6.74586C9.58479 6.83929 9.5324 6.96601 9.5324 7.09815V11.0839C9.53238 11.1488 9.54531 11.2131 9.57042 11.273C9.59554 11.3329 9.63233 11.3872 9.67864 11.4327C9.72495 11.4782 9.77986 11.5139 9.84014 11.5379C9.90042 11.5618 9.96487 11.5734 10.0297 11.5721C10.1599 11.5721 10.2849 11.521 10.3779 11.4297C10.4709 11.3384 10.5244 11.2143 10.527 11.0839ZM15.5001 4.9359C15.4974 5.13237 15.4177 5.3199 15.2781 5.4579C15.1385 5.59591 14.9502 5.67327 14.7541 5.67325H14.2568L12.6853 14.1927C12.6409 14.423 12.5167 14.6302 12.3348 14.7779C12.1529 14.9255 11.9248 15.0041 11.6907 14.9998H5.40477C5.17068 15.0041 4.94259 14.9255 4.76065 14.7779C4.57872 14.6302 4.4546 14.423 4.41016 14.1927L2.84862 5.62343H2.32148C2.21832 5.63551 2.11377 5.62557 2.01472 5.59428C1.91566 5.56299 1.82434 5.51105 1.74676 5.44187C1.66917 5.3727 1.60708 5.28785 1.56456 5.19292C1.52204 5.09798 1.50005 4.99511 1.50005 4.89106C1.50005 4.787 1.52204 4.68413 1.56456 4.5892C1.60708 4.49426 1.66917 4.40942 1.74676 4.34024C1.82434 4.27107 1.91566 4.21913 2.01472 4.18783C2.11377 4.15654 2.21832 4.14661 2.32148 4.15868H5.36498C5.42131 3.33616 5.77423 2.56222 6.35796 1.98108C6.9417 1.39994 7.71643 1.05126 8.53779 1C9.3609 1.04892 10.138 1.39658 10.7238 1.97795C11.3096 2.55931 11.664 3.33456 11.7205 4.15868H14.7044C14.8051 4.15047 14.9064 4.16312 15.002 4.19585C15.0977 4.22858 15.1855 4.28069 15.2602 4.34893C15.3348 4.41717 15.3947 4.50008 15.4359 4.59249C15.4772 4.68491 15.499 4.78484 15.5001 4.88608V4.9359ZM12.735 5.69318H4.37037L5.81256 13.4753H11.2929L12.735 5.69318ZM6.86684 4.15868H10.2386C10.1964 3.72209 10.0033 3.31395 9.69284 3.0047C9.38234 2.69545 8.97382 2.50448 8.53779 2.46475C8.1071 2.51101 7.70558 2.70486 7.40111 3.01351C7.09665 3.32217 6.90792 3.72669 6.86684 4.15868Z"
											fill="#999999"
										/>
									</g>
								</svg>
								<span>Удалить</span>
							</button>
						</div>
					</PopUp>}
			</div>
			<Modal componentId={modalState} setModalId={setModalState}/>
		</MainContext.Provider>
  );
}

export default App;
