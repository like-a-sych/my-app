import AddButton from "../AddButton/AddButton";
import InputContainer from "../InputContainer/InputContainer";
import InputDeleteBlock from "../InputDeleteBlock/InputDeleteBlock";
import style from "../PurchaseEditModal.module.scss";

export default function AddItemBlock({ data, labelFields }) {
	return (
		<>
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
		</>
	);
}
