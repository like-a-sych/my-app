import { usePagination } from "../../../hooks/usePagination";
import { visibleCells } from "../../../constants/visibleCells";
import SelectOptions from "./SelectOptions";
import style from "./Pagination.module.scss";

export default function Pagination({
	pagination,
	setPagination,
	sliceArray,
	setCheckedItemsArray,
	setCellArray,
}) {
	const { setCountHandler, lastPage, prevPageHandler, nextPageHandler } =
		usePagination({
			pagination,
			setPagination,
			sliceArray,
			setCellArray,
			setCheckedItemsArray,
		});
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
