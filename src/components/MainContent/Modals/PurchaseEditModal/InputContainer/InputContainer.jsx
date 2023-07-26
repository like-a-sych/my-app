import { Children } from "react";
import style from "./InputContainer.module.scss";
import AddButton from "../AddButton/AddButton";
import HelpSpan from "../HelpSpan/HelpSpan";

export default function InputContainer({
	children,
	textButton,
	title,
	helpText,
}) {
	return (
		<>
			<div className={style["title"]}>{title}</div>
			<div className={style["input-container"]}>
				{Children.map(children, child => (
					<div className={style["input-container__block"]}>{child}</div>
				))}
			</div>
			{helpText && (
				<HelpSpan>
					<>{helpText}</>
				</HelpSpan>
			)}
			<AddButton text={textButton}></AddButton>
		</>
	);
}
