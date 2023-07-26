import { Children } from "react";
import style from "./InputContainer.module.scss";

export default function InputContainer({ children }) {
	return (
		<>
			<div className={style["input-container"]}>
				{Children.map(children, child => (
					<div className={style["input-container__block"]}>{child}</div>
				))}
			</div>
		</>
	);
}
