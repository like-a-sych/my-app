import { useContext, useEffect } from "react";
import { tableCellsArray } from "../../constants/cells";
import { MainContext } from "../../context";
import AddItemButton from "../TabComponents/AddItemButton";
import Pagination from "../TabComponents/Pagination";
import Table from "../TabComponents/Table";
import style from "./TableBlock.module.scss";


export default function TableBlock() {
	const {cellArray, setCellArray, setlimitCellonPage,	pagination,	setPagination, limitCellonPage, sliceArray, setChecked} = useContext(MainContext)
	
  useEffect(() => {
    setCellArray(sliceArray(tableCellsArray)); //триггерим перерисовку массива, если изменяется страница или лимит отображения контента на странице 
		setChecked(false)
  }, [pagination.page, pagination.limit]);

  useEffect(() => {
    // перерисовываем пагинацию, если меняеется лимит отображения контента на странице и если пагинация превышает лимит отображаемых страниц, то сбрасываем до 1
    if (
      pagination.page !==
      Math.ceil(
        tableCellsArray.length / limitCellonPage
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
        <Table showTableCell={cellArray} />
      </div>
    </div>
  );
}
