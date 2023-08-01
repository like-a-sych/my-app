import style from "./TextareaBlock.module.scss";

export default function TextareaBlock(labelFields) {
	return (
		<div className={style["edit-sales-textarea"]}>
			<label htmlFor="" className={style["textarea-label"]}>
				{labelFields.description}
				<textarea
					className={style["textarea"]}
					id=""
					placeholder="Опишите товар"
				></textarea>
			</label>
		</div>
	);
}
