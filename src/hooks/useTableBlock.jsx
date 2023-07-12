import { useState, useEffect } from "react";
import { visibleCells } from "../constants/visibleCells";
import { tableCellsArray } from "../constants/cells";

export function useTableBlock() {
	const [pagination, setPagination] = useState({
		//состояние для пагинации на странице
		currentPage: 1,
		limitView: visibleCells[0],
	});
	const [cellArray, setCellArray] = useState([]);
	const [checkedItemsArray, setCheckedItemsArray] = useState([]);
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup

	function sliceArray(table) {
		// передаем массив и режем его (начальная страница - 1  и лимит отображения контента страницы)
		return table.slice(
			Number((pagination.currentPage - 1) * pagination.limitView),
			Number(pagination.limitView) * Number(pagination.currentPage)
		);
	}

	function deleteCellTable() {
		//функция для удаления выделенных чекбоксом полей и отрисовки нового массива
		for (let i = 0; i < tableCellsArray.length; i++) {
			if (checkedItemsArray.includes(tableCellsArray[i].id)) {
				tableCellsArray.splice(i, 1);
				i--;
			}
		}
		setOpenPopup(false);
		setCheckedItemsArray([]);
		setCellArray(sliceArray(tableCellsArray));
	}

	useEffect(() => {
		// перерисовываем пагинацию, если меняется лимит отображения контента на странице и если пагинация превышает лимит отображаемых страниц, то сбрасываем до 1
		if (
			pagination.currentPage !==
			Math.ceil(tableCellsArray.length / pagination.limitView)
		) {
			setPagination(prev => ({
				...prev,
				currentPage: 1,
				limitView: prev.limitView,
			}));
		} else {
			setPagination(prev => ({
				...prev,
				limitView: prev.limitView,
			}));
		}
		setCellArray(sliceArray(tableCellsArray));
	}, [pagination.limitView]);

	useEffect(() => {
		// стейт для вызова попапа, когда выделяешь чекбоксы таблицы
		if (checkedItemsArray.length === 0) {
			setOpenPopup(false);
		} else {
			setOpenPopup(true);
		}
	}, [checkedItemsArray]);

	return {
		cellArray,
		setCellArray,
		deleteCellTable,
		pagination,
		openPopup,
		sliceArray,
		setOpenPopup,
		checkedItemsArray,
		setCheckedItemsArray,
		setPagination,
		openPopup,
		setOpenPopup,
	};
}
