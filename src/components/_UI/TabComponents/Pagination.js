import { useRef } from "react";
import { tableCellsArray } from "../../../constants/cells";
import style from "./Pagination.module.scss";
import SelectOptions from "./SelectOptions";

export default function Pagination({
  pagination,
  setPagination,
  setlimitCellonPage,
  limitCellonPage,
}) {
  const visibleCount = [5, 10, 20, 40];

  const lastPage = Math.floor(
    tableCellsArray.length / Number(limitCellonPage) + Number("1")
  );

  function setCountHandler(e) {
    if (tableCellsArray.length) {
      setlimitCellonPage(e.target.value);
    } else {
      alert("Нечего выводить");
    }
  }
  function prevPageHandler() {
    if (pagination.page > 1) {
      setPagination({
        ...pagination,
        page: pagination.page - 1,
        limit: Number(pagination.limit) - limitCellonPage,
      });
    }
  }
  function nextPageHandler() {
    if (
      pagination.page <= Math.floor(tableCellsArray.length / limitCellonPage)
    ) {
      setPagination({
        ...pagination,
        page: pagination.page + 1,
        limit: Number(pagination.limit) + limitCellonPage,
      });
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
