import { useEffect } from "react";
import { tableCellsArray } from "../constants/cells";

export function usePagination({
	pagination,
	setPagination,
	sliceArray,
	setCellArray,
	setCheckedItemsArray,
}) {
	const lastPage = Math.ceil(tableCellsArray.length / +pagination.limitView); // переменная для вычисления последней странице на основе отображаемого контента на странице

	function setCountHandler(e) {
		if (tableCellsArray.length) {
			setPagination(prev => ({
				...prev,
				limitView: e.target.value,
			})); // задаем количество отображаемого контента на странице
		} else {
			alert("Нечего выводить");
		}
	}

	function prevPageHandler() {
		//при перелистывании назад отнимаем единицу от существующей страницы, если она не равна 1 и отнимаем от лимита отображаемого контента, заданное количество отображаемого контента
		if (pagination.currentPage > 1) {
			setPagination(prev => ({
				...prev,
				currentPage: prev.currentPage - 1,
			}));
		}
	}

	function nextPageHandler() {
		//при перелистывании вперед добавляем единицу к существующей странице, если она  равна 1, то функция не срабатывает и прибавляем к лимиту отображаемого контента, заданное количество отображаемого контента
		if (
			pagination.currentPage <=
			Math.floor(Number(tableCellsArray.length) / Number(pagination.limitView))
		) {
			setPagination(prev => ({
				...prev,
				currentPage: prev.currentPage + 1,
			}));
		}
	}

	useEffect(() => {
		setCellArray(sliceArray(tableCellsArray)); //триггерим перерисовку массива, если изменяется страница или лимит отображения контента на странице
		return () => setCheckedItemsArray([]);
	}, [pagination.currentPage, pagination.limitView]);

	return {
		setCountHandler,
		lastPage,
		prevPageHandler,
		nextPageHandler,
	};
}
