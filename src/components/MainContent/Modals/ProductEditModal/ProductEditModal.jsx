import { useContext } from "react";
import { MainContext } from "../../../../context";
import { labelFields } from "./labelFields";
import {
	InputContainer,
	InputDeleteBlock,
	ImageBlock,
	HelpSpan,
	TagsBlock,
	TagsItem,
	TextareaBlock,
	InputList,
} from "./components/index";

import ModalButton from "../../../../UI/Modal/Button/ModalButton";
import HeaderModal from "../../../../UI/Modal/HeaderModal/HeaderModal";
import LabelInput from "../../../../UI/Modal/LabelInput/LabelInput";

import style from "./ProductEditModal.module.scss";

export default function PurchaseEditModal() {
	const { modalState } = useContext(MainContext);
	const data = modalState.data;

	return (
		<form className={style["edit-sales"]}>
			<HeaderModal>
				<ModalButton textButton={"Сохранить"} />
				<ModalButton textButton={"Сохранить и закрыть"} />
			</HeaderModal>
			<hr />
			<div className={style["edit-sales__body"]}>
				<div className={style["edit-sales__item"]}>
					<InputList>
						<LabelInput
							type="text"
							value={data.nameFrom1C}
							label={labelFields.nameFrom1C}
							disable
						/>
						<LabelInput
							type="text"
							value={data.nameFrom1C}
							label={labelFields.name}
						/>
						<LabelInput
							type="text"
							value={data.brand.name}
							label={labelFields.brand}
							dropdown
						/>
						<LabelInput
							type="text"
							value={data.codeFrom1C}
							label={labelFields.codeFrom1C}
							disable
						/>
					</InputList>
					<TextareaBlock labelFields={labelFields} />
				</div>
				<div className={style["edit-sales__item"]}>
					<ImageBlock data={data} labelFields={labelFields} />
				</div>
				<div className={style["edit-sales__item"]}>
					<InputList>
						<LabelInput
							type="text"
							value={data.price}
							label={labelFields.price}
							disable
						/>
					</InputList>
				</div>
				<div className={style["edit-sales__item"]}>
					<div className={style["edit-sales__wrapper"]}>
						<LabelInput
							type="text"
							value={data.category}
							label={labelFields.category}
							placeholder="Выберите категорию"
							dropdown
						/>
						<LabelInput
							type="text"
							value={data.subcategory}
							label={labelFields.subcategory}
							disable
							placeholder="Выберите подкатегорию"
							dropdown
						/>
					</div>
				</div>
				<div className={style["edit-sales__item"]}>
					<InputContainer
						title={labelFields.volume}
						textButton={"+ Добавить объем"}
					>
						<InputDeleteBlock
							value1={data.volume}
							value2={data.codeFrom1C}
							placeholder1="Значение"
							placeholder2="Артикул"
						></InputDeleteBlock>
						<InputDeleteBlock
							value1=""
							value2=""
							placeholder1="Значение"
							placeholder2="Артикул"
						></InputDeleteBlock>
					</InputContainer>
				</div>
				<div className={style["edit-sales__item"]}>
					<InputContainer
						title={labelFields.features}
						textButton={"+ Добавить характеристику"}
						helpText={"Максимум 15 характеристик"}
					>
						<InputDeleteBlock
							value1="Страна изготовитель"
							value2="Франция"
							placeholder1="Название характеристики"
							placeholder2="Значение характеристики"
						></InputDeleteBlock>
						<InputDeleteBlock
							value1=""
							value2=""
							placeholder1="Название характеристики"
							placeholder2="Значение характеристики"
						></InputDeleteBlock>
					</InputContainer>
				</div>
				<div className={style["edit-sales__item"]}>
					<div className={style["tags"]}>
						<div className={style["title"]}>{labelFields.tags}</div>
						<TagsBlock>
							<TagsItem nameTag="Name tag" />
						</TagsBlock>
						<HelpSpan>
							<>Максимум 120 тэгов</>
						</HelpSpan>
					</div>
				</div>
			</div>
		</form>
	);
}
