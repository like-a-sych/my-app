import { useContext } from "react";
import { MainContext } from "../../../../context";
import { labelFields } from "./labelFields";
import ModalButton from "../../../../UI/Modal/Button/ModalButton";
import HeaderModal from "../../../../UI/Modal/HeaderModal/HeaderModal";
import LabelInput from "../../../../UI/Modal/LabelInput/LabelInput";
import ImageBlock from "./ImageBlock/ImageBlock";
import InputList from "./InputList/InputList";
import InputContainer from "./InputContainer/InputContainer";
import InputDeleteBlock from "./InputDeleteBlock/InputDeleteBlock";
import AddButton from "./AddButton/AddButton";
import HelpSpan from "./HelpSpan/HelpSpan";
import TagsBlock from "./TagsBlock/TagsBlock";
import TagsItem from "./TagsBlock/TagsItem";
import TextareaBlock from "./TextareaBlock/TextareaBlock";

import style from "./PurchaseEditModal.module.scss";

export default function PurchaseEditModal() {
	const { modalState } = useContext(MainContext);
	const data = modalState.data;

	console.log(data);

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
						/>
						<LabelInput
							type="text"
							value={data.subcategory}
							label={labelFields.subcategory}
							disable
							placeholder="Выберите подкатегорию"
						/>
					</div>
				</div>
				<div className={style["edit-sales__item"]}>
					<div className={style["title"]}>{labelFields.volume}</div>
					<InputContainer>
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
					<AddButton text="+ Добавить объем"></AddButton>
				</div>
				<div className={style["edit-sales__item"]}>
					<div className={style["title"]}>{labelFields.features}</div>
					<InputContainer>
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
					<HelpSpan>
						<>Максимум 15 характеристик</>
					</HelpSpan>
					<AddButton text="+ Добавить характеристику" />
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
