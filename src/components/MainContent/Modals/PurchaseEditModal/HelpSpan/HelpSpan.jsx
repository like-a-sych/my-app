import { Children } from "react";
import style from "../PurchaseEditModal.module.scss";

export default function HelpSpan({ children }) {
	return (
		<div className={style["span-help"]}>
			{Children.map(children, child => (
				<span>{child}</span>
			))}
		</div>
	);
}
