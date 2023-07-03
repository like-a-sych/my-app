import { useEffect, useState } from "react";
import { tableCellsArray } from "../../../constants/cells";
import AddItemButton from "../TabComponents/AddItemButton";
import Pagination from "../TabComponents/Pagination";
import Table from "../TabComponents/Table";
import style from "./TableBlock.module.scss";

export default function Sales({ limitCellonPage, setlimitCellonPage }) {
  const [cellArray, setCellArray] = useState(tableCellsArray);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: limitCellonPage,
  });

  function sliceArray(table) {
    return table.slice(
      (pagination.page - 1) * limitCellonPage,
      pagination.limit
    );
  }

  useEffect(() => {
    setCellArray(sliceArray(tableCellsArray));
  }, [pagination.page, pagination.limit]);

  useEffect(() => {
    if (
      pagination.page !==
      Math.floor(tableCellsArray.length / Number(limitCellonPage) + Number("1"))
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
        <Table showTableCell={cellArray} limitCellonPage={limitCellonPage} />
      </div>
    </div>
  );
}
