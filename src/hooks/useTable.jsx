import { useState, useEffect, useCallback } from "react";
import { visibleCells } from "../constants/visibleCells";

export function useTable(data) {
	const [pagination, setPagination] = useState({
		//состояние для пагинации на странице
		currentPage: 1,
		limitView: visibleCells[0],
	});
	const [cellArray, setCellArray] = useState([]);
	const [checkedItemsArray, setCheckedItemsArray] = useState([]);
	const [openPopup, setOpenPopup] = useState(false); // дефолтное состояние popup

	const sliceArray = useCallback(
		table => {
			// передаем массив и режем его (начальная страница - 1  и лимит отображения контента страницы)
			return table.slice(
				Number((pagination.currentPage - 1) * pagination.limitView),
				Number(pagination.limitView) * Number(pagination.currentPage)
			);
		},
		[pagination.currentPage, pagination.limitView]
	);

	function PopUpToggle() {
		setOpenPopup(prev => !prev);
	}

	function deleteCellTable() {
		//функция для удаления выделенных чекбоксом полей и отрисовки нового массива
		for (let i = 0; i < data.length; i++) {
			if (checkedItemsArray.includes(data[i].id)) {
				data.splice(i, 1);
				i--;
			}
		}
		PopUpToggle();
		setCheckedItemsArray([]);
		setCellArray(sliceArray(data));
	}

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
		pagination,
		setPagination,
		setCheckedItemsArray,
		openPopup,
		PopUpToggle,
		deleteCellTable,
		sliceArray,
		checkedItemsArray,
	};
}
