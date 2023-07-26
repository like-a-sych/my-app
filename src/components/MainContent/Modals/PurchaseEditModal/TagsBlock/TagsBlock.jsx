import { Children } from "react";
import style from "./TagsBlock.module.scss";

export default function TagsBlock({ children }) {
	return (
		<div className={style["tags-block"]}>
			{Children.map(children, child => (
				<div className={style["tags-block__item"]}>{child}</div>
			))}
		</div>
	);
}
