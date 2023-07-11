import { useEffect } from "react";
import { tableCellsArray } from "../../constants/cells";
import SelectOptions from "./SelectOptions";
import style from "./Pagination.module.scss";
import { visibleCells } from "../../constants/visibleCells";

export default function Pagination({
	pagination,
	setPagination,
	sliceArray,
	setCheckedItemsArray,
	setCellArray,
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

	return (
		<div className={style["pagination"]}>
			<div className={style["pagination__wrapper"]}>
				<div className={style["pagination__showing"]}>
					<p>Показывать</p>
					<select
						className={style["pagination__show"]}
						onChange={setCountHandler}
					>
						{visibleCells.map(item => (
							<SelectOptions key={item} value={item} />
						))}
					</select>
				</div>
				<div className={style["pagination__pages"]}>
					<p>Страница</p>
					<div className={style["pagination__page"]}>
						<span className={style["pagination__page_active"]}>
							{pagination.currentPage}
						</span>
						из
						<span className={style["pagination__page_all"]}>{lastPage}</span>
					</div>
				</div>
				<div className={style["pagination__arrows"]}>
					<div
						className={style["pagination__prev"]}
						onClick={prevPageHandler}
					></div>
					<div
						className={style["pagination__next"]}
						onClick={nextPageHandler}
					></div>
				</div>
			</div>
		</div>
	);
}
