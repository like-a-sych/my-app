import { Children } from "react";

import style from "./InputBlock.module.scss";

export default function InputList({ children, labelFields }) {
	return (
		<div className={style["input-list"]}>
			<ul className={style["list-block"]}>
				{Children.map(children, child => (
					<li className={style["list-block__list-item"]}>{child}</li>
				))}
			</ul>
		</div>
	);
}
