import RowTable from "./RowTable";

export default function InnerContentTable({ data, setPosition }) {
	return (
		<div className="table__inner inner-data-table">
			<div className="inner-data-table__header">Название категории</div>
			<div className="inner-data-table__body">
				{data &&
					data.map(item => (
						<RowTable key={item.id} item={item} setPosition={setPosition} />
					))}
			</div>
		</div>
	);
}
