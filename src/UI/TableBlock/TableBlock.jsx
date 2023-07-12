import { useTableBlock } from "../../hooks/useTableBlock";
import { Pagination, Table, AddItemButton } from "../TabComponents";
import PopUp from "../PopUp/PopUp";
import style from "./TableBlock.module.scss";

export default function TableBlock() {
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
	} = useTableBlock();

	return (
		<div className={style["table-block"]}>
			<div className={style["table-block__header"]}>
				<Pagination
					setCellArray={setCellArray}
					setCheckedItemsArray={setCheckedItemsArray}
					pagination={pagination}
					setPagination={setPagination}
					sliceArray={sliceArray}
				/>
				<AddItemButton />
			</div>
			<div className={style["table-block__content"]}>
				<Table
					cellArray={cellArray}
					checkedItemsArray={checkedItemsArray}
					setCheckedItemsArray={setCheckedItemsArray}
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
