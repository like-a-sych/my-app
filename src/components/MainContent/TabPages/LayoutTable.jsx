import PopUp from "../../../UI/PopUp/PopUp";
import { Pagination, Table } from "../../../UI/TabComponents";
import { useTable } from "../../../hooks/useTable";
import style from "./LayoutTable.module.scss";

export default function LayoutTable({ data, modalId, columns }) {
	const {
		setOpenPopup,
		openPopup,
		pagination,
		setCellArray,
		cellArray,
		deleteCellTable,
		checkedItemsArray,
		sliceArray,
		setCheckedItemsArray,
		setPagination,
	} = useTable(data); //хук для отрисовки таблицы, пагинации, удалении полей

	return (
		<div className={style["table-block"]}>
			<div className={style["table-block__header"]}>
				{data !== undefined && (
					<Pagination
						data={data}
						setCellArray={setCellArray}
						setCheckedItemsArray={setCheckedItemsArray}
						pagination={pagination}
						setPagination={setPagination}
						sliceArray={sliceArray}
					/>
				)}
			</div>
			<div className={style["table-block__content"]}>
				<Table
					cellArray={cellArray}
					checkedItemsArray={checkedItemsArray}
					setCheckedItemsArray={setCheckedItemsArray}
					columns={columns}
					modalId={modalId}
				/>
				{openPopup && (
					<PopUp
						openPopup={openPopup}
						setOpenPopup={setOpenPopup}
						checkedItemsArray={checkedItemsArray}
						deleteCellTable={deleteCellTable}
					></PopUp>
				)}
			</div>
		</div>
	);
}
