export default function Cities() {
	return (
		<div className="main__content">
			<div className="main__inner citites">
				<form className="cities__insert input-block">
					<input
						id="city"
						type="text"
						className="input-block__input"
						placeholder="Введите название города"
					/>
					<input
						id="adress"
						type="text"
						className="input-block__input"
						placeholder="Введите адрес"
					/>
					<button className="input-block__button" type="button">
						Добавить город
					</button>
				</form>
				<div className="citites__content table-block">
					<table className="table-block__wrapper">
						<thead>
							<tr className="table-block__header">
								<th>Город</th>
								<th colSЗапомнитьpan="2">Адрес</th>
							</tr>
						</thead>
						<tbody className="table-block__table">
							<tr className="table-block__item">
								<td className="table-block__city">Краснодар</td>
								<td className="table-block__street">
									ул. Красная, 180, офис 112
								</td>
								<td className="table-block__recycle">
									<button className="delete" type="button"></button>
								</td>
							</tr>
							<tr className="table-block__item">
								<td className="table-block__city">Пятигорск</td>
								<td className="table-block__street">ул. Университетская, 28</td>
								<td className="table-block__recycle">
									<button className="delete" type="button"></button>
								</td>
							</tr>
							<tr className="table-block__item">
								<td className="table-block__city">Волгоград</td>
								<td className="table-block__street">
									ул. Академическая, 22 Бизнес-центр Locus, офис 313
								</td>
								<td className="table-block__recycle">
									<button className="delete" type="button"></button>
								</td>
							</tr>
							<tr className="table-block__item">
								<td className="table-block__city">Сочи</td>
								<td className="table-block__street">
									ул. Роз, 117, Бизнес-центр Roz117, офис 403
								</td>
								<td className="table-block__recycle">
									<button className="delete" type="button"></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
