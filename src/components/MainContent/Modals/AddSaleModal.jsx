import style from "./AddSaleModal.module.scss"

export default function AddSaleModal() {
	return (	
		<div className={style.sales}>
			<div className={style.sales__header}>
				<div className={style["header-button"]}>
					<div className={style["header-button__item"]}>
						<button type="button">
						Удалить
						</button>
					</div>
					<div className={style["header-button__item"]}>
						<button type="button">
						Сохранить
						</button>
					</div>
				</div>
			</div>
			<div className={style.sales__body}>
				<div className={style["sales-block"]}>
					<ul className={style["sales-block__list"]}>		
							<li className={style["sales-block__list-item"]}>
								<label htmlFor="input-1"  className={style["sales-block__label"]}>Начисление кешбека с покупки</label>
								<input id="input-1" className={style["sales-block__input"]} tyle='text' value={'20%'}></input>
							</li>
							<li className={style["sales-block__list-item"]}>
								<label htmlFor="input-1"  className={style["sales-block__label"]}>Категория</label>
								<input id="input-1" className={style["sales-block__input"]} tyle='text' value={'Название категории'}></input>
							</li>
							<li className={style["sales-block__list-item"]}>
								<label htmlFor="input-1"  className={style["sales-block__label"]}>Подкатегория</label>
								<input id="input-1" className={style["sales-block__input"]} tyle='text' value={'Название подкатегории'}></input>
							</li>
							<li className={style["sales-block__list-item"]}>
								<label htmlFor="input-1"  className={style["sales-block__label"]}>Бренд</label>
								<input id="input-1" className={style["sales-block__input"]} tyle='text' value={'Имя бренда'}></input>
							</li>
					</ul>
				</div>
			</div>
		</div>
	)
}