import { useProductsTableHook } from "./useProductsTableHook";
import { Pagination, Table } from "../../../../UI/TabComponents";
import { ProductsMockData } from "../../../../constants/ProductsMockData";
import { theadListPromocodes } from "./theadList";
import PopUp from "../../../../UI/PopUp/PopUp";
import style from "../TableBlock.module.scss";

export default function Products() {
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
	} = useProductsTableHook(ProductsMockData);

	return (
		<div className={style["table-block"]}>
			<div className={style["table-block__header"]}>
				{ProductsMockData !== undefined && (
					<Pagination
						data={ProductsMockData}
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
					theadList={theadListPromocodes}
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
