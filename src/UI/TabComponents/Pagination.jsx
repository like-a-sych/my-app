import { useContext } from "react";
import { MainContext } from "../../context";
import { tableCellsArray } from "../../constants/cells";
import SelectOptions from "./SelectOptions";
import style from "./Pagination.module.scss";

export default function Pagination({
  pagination,
  setPagination,
  setlimitCellonPage,
  limitCellonPage,
}) {

	const {setCheckedItemsArray} = useContext(MainContext);
  const visibleCount = [5, 10, 20, 40]; // лимит отображения контента на странице

  const lastPage = Math.floor(
    tableCellsArray.length / Number(limitCellonPage) + Number("1")
  ); // переменная для вычисления последней странице на основе отображаемого контента на странице

  function setCountHandler(e) {
    if (tableCellsArray.length) {
      setlimitCellonPage(e.target.value); // задаем количество отображаемого контента на странице 
    } else {
      alert("Нечего выводить");
    } 
  }
  function prevPageHandler() {
    //при перелистывании назад отнимаем единицу от существующей страницы, если она не равна 1 и отнимаем от лимита отображаемого контента, заданное количество отображаемого контента
    if (pagination.page > 1) {
      setPagination({
        ...pagination,
        page: pagination.page - 1,
        limit: Number(pagination.limit) - Number(limitCellonPage),
      });
			setCheckedItemsArray([]);
    }
  }
  function nextPageHandler() {
    //при перелистывании вперед добавляем единицу к существующей странице, если она  равна 1, то не функция не срабатывает и прибавляем к лимиту отображаемого контента, заданное количество отображаемого контента
    if (
      pagination.page <=
      Math.floor(Number(tableCellsArray.length) / Number(limitCellonPage))
    ) {
      setPagination({
        ...pagination,
        page: pagination.page + 1,
        limit: Number(pagination.limit) + Number(limitCellonPage),
      });
			setCheckedItemsArray([])
    }
  }
  return (
    <div className={style["pagination"]}>
      <div className={style["pagination__wrapper"]}>
        <div className={style["pagination__showing"]}>
          <p>Показывать</p>
          <select
            className={style["pagination__show"]}
            onChange={setCountHandler}
          >
            {visibleCount.map((item) => (
              <SelectOptions key={item} value={item} />
            ))}
          </select>
        </div>
        <div className={style["pagination__pages"]}>
          <p>Страница</p>
          <div className={style["pagination__page"]}>
            <span className={style["pagination__page_active"]}>
              {pagination.page}
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
