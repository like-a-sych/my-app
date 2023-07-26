import { useEffect } from "react";

export function usePagination({
	pagination,
	setPagination,
	sliceArray,
	setCellArray,
	setCheckedItemsArray,
	data,
}) {
	const lastPage = Math.ceil(data.length / +pagination.limitView); // переменная для вычисления последней странице на основе отображаемого контента на странице

	function setCountHandler(e) {
		if (data.length) {
			setPagination(prev => ({
				...prev,
				limitView: e.target.value,
				isOpen: true,
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
			Math.floor(Number(data.length) / Number(pagination.limitView))
		) {
			setPagination(prev => ({
				...prev,
				currentPage: prev.currentPage + 1,
			}));
		}
	}

	useEffect(() => {
		setCellArray(sliceArray(data)); //триггерим перерисовку массива, если изменяется страница или лимит отображения контента на странице
		return () => setCheckedItemsArray([]);
	}, [pagination.currentPage, pagination.limitView]);

	useEffect(() => {
		// перерисовываем пагинацию, если меняется лимит отображения контента на странице и если пагинация превышает лимит отображаемых страниц, то сбрасываем до 1
		if (
			pagination.currentPage !== Math.ceil(data.length / pagination.limitView)
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
		setCellArray(sliceArray(data));
	}, [pagination.limitView]);

	return {
		setCountHandler,
		lastPage,
		prevPageHandler,
		nextPageHandler,
	};
}
