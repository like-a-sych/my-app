import { useEffect, useState } from "react";
import { tableCellsArray } from "../../constants/cells";
import AddItemButton from "../TabComponents/AddItemButton";
import Pagination from "../TabComponents/Pagination";
import Table from "../TabComponents/Table";
import style from "./TableBlock.module.scss";

export default function TableBlock() {
	const [limitCellonPage, setlimitCellonPage] = useState(5); //устанавливаем нижнее значение для отображени контента на странице
  const [cellArray, setCellArray] = useState(tableCellsArray); //передаем массив с данными для таблицы
  const [pagination, setPagination] = useState({
    page: 1,
    limit: limitCellonPage,
  }); // устанавливаем пагинацию и лимит отображения контента таблицы

  function sliceArray(table) {
    // передаем массив и режем его (начальная страница - 1  и лимит отображения контента страницы)
    return table.slice(
      Number((pagination.page - 1) * limitCellonPage),
      Number(pagination.limit)
    );
  }

  useEffect(() => {
    //триггерим перерисовку массива, если изменяется страница или лимит отображения контента на странице
    setCellArray(sliceArray(tableCellsArray));
  }, [pagination.page, pagination.limit]);

  useEffect(() => {
    // перерисовываем пагинацию, если меняеется лимит отображения контента на странице и если пагинация превышает лимит отображаемых страниц, то сбрасываем до 1
    if (
      pagination.page !==
      Math.floor(
        Number(tableCellsArray.length) / Number(limitCellonPage) + Number("1")
      )
    ) {
      setPagination({
        ...pagination,
        page: 1,
        limit: limitCellonPage,
      });
    } else {
      setPagination({
        ...pagination,
        limit: limitCellonPage,
      });
    }
  }, [limitCellonPage]);

  return (
    <div className={style["table-block"]}>
      <div className={style["table-block__header"]}>
        <Pagination
          setlimitCellonPage={setlimitCellonPage}
          setPagination={setPagination}
          pagination={pagination}
          limitCellonPage={limitCellonPage}
        />
        <AddItemButton />
      </div>
      <div className={style["table-block__content"]}>
        <Table showTableCell={cellArray} limitCellonPage={limitCellonPage} sliceArray={sliceArray} />
      </div>
    </div>
  );
}
