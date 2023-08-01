export default function RowTable({ item, setPosition }) {
	function selectCategory() {
		if (setPosition) {
			setPosition(item.position);
		}
	}
	return (
		<div className="inner-data-table__item" onClick={selectCategory}>
			<div className="inner-data-table__name">{item.name}</div>
			<div className="inner-data-table__buttons">
				<div className="inner-data-table__btn">
					<button className="edit" />
				</div>
				<div className="inner-data-table__btn">
					<button className="delete" />
				</div>
			</div>
		</div>
	);
}
