import { Pagination, Table } from "../../../UI/TabComponents";
import { useTable } from "../../../hooks/useTable";

import PopUp from "../Modals/PopUp/PopUp";

import style from "./LayoutTable.module.scss";

export default function LayoutTable({
	data,
	idModal,
	columns,
	hasCheckbox,
	errorText,
}) {
	const {
		PopUpToggle,
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
			{data ? (
				<>
					<div className={style["table-block__header"]}>
						<Pagination
							data={data}
							setCellArray={setCellArray}
							setCheckedItemsArray={setCheckedItemsArray}
							pagination={pagination}
							setPagination={setPagination}
							sliceArray={sliceArray}
						/>
					</div>
					<div className={style["table-block__content"]}>
						<Table
							hasCheckbox={hasCheckbox}
							cellArray={cellArray}
							checkedItemsArray={checkedItemsArray}
							setCheckedItemsArray={setCheckedItemsArray}
							columns={columns}
							idModal={idModal}
						/>
						{openPopup && (
							<PopUp
								openPopup={openPopup}
								PopUpToggle={PopUpToggle}
								checkedItemsArray={checkedItemsArray}
								deleteCellTable={deleteCellTable}
							></PopUp>
						)}
					</div>
				</>
			) : (
				<div className={style["errorText"]}>{errorText}</div>
			)}
		</div>
	);
}
