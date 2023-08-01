import style from "./Cities.module.scss";

export default function Cities() {
	return (
		<div className={style["main__content"]}>
			<div className={style["main__inner cities"]}>
				<form className={style["cities__insert input-block"]}>
					<input
						id="city"
						type="text"
						className={style["input-block__input"]}
						placeholder="Введите название города"
					/>
					<input
						id="address"
						type="text"
						className={style["input-block__input"]}
						placeholder="Введите адрес"
					/>
					<button className={style["input-block__button"]} type="button">
						Добавить город
					</button>
				</form>
				<div className={style["cities__content table-block"]}>
					<table className={style["table-block__wrapper"]}>
						<thead>
							<tr className={style["table-block__header"]}>
								<th>Город</th>
								<th colSpan="2">Адрес</th>
							</tr>
						</thead>
						<tbody className={style["table-block__table"]}>
							<tr className={style["table-block__item"]}>
								<td className={style["table-block__city"]}>Краснодар</td>
								<td className={style["table-block__street"]}>
									ул. Красная, 180, офис 112
								</td>
								<td className={style["table-block__recycle"]}>
									<button className={style["delete"]} type="button"></button>
								</td>
							</tr>
							<tr className={style["table-block__item"]}>
								<td className={style["table-block__city"]}>Пятигорск</td>
								<td className={style["table-block__street"]}>
									ул. Университетская, 28
								</td>
								<td className={style["table-block__recycle"]}>
									<button className={style["delete"]} type="button"></button>
								</td>
							</tr>
							<tr className={style["table-block__item"]}>
								<td className={style["table-block__city"]}>Волгоград</td>
								<td className={style["table-block__street"]}>
									ул. Академическая, 22 Бизнес-центр Locus, офис 313
								</td>
								<td className={style["table-block__recycle"]}>
									<button className={style["delete"]} type="button"></button>
								</td>
							</tr>
							<tr className={style["table-block__item"]}>
								<td className={style["table-block__city"]}>Сочи</td>
								<td className={style["table-block__street"]}>
									ул. Роз, 117, Бизнес-центр Roz117, офис 403
								</td>
								<td className={style["table-block__recycle"]}>
									<button className={style["delete"]} type="button"></button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
