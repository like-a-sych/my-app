import HelpSpan from "../HelpSpan/HelpSpan";
import style from "./ImageBlock.module.scss";
import coreStyle from "../../PurchaseEditModal.module.scss";

export default function ImageBlock({ data, labelFields }) {
	return (
		<>
			<div className={style["image-block"]}>
				<div className={coreStyle["title"]}>{labelFields.image}</div>
				<fieldset className={style["image-block__item"]}>
					<div className={style["image-block__wrapper"]}>
						<div className={style["image-block__picture"]}>
							<img
								src={data.images[0]} //TODO: сделать через map
								className={style["image-block__image"]}
								alt="pictures"
							></img>
						</div>
						<span className={style["image-block__description"]}>
							{data.images[0]}
						</span>
						<button className={style["image-block__delete"]}></button>
					</div>
				</fieldset>
				<fieldset className={style["image-block__item"]}>
					<label className={style["image-block__upload"]}>
						<input
							type="text"
							className={style["image-block__upload-source"]}
							placeholder="Вставьте ссылку на Google Drive"
						></input>
					</label>
					<HelpSpan>
						<>Максимум 5 изображений</>
						<>Размер фото 1000x1000 px PNG, JPG, JPEG</>
					</HelpSpan>
				</fieldset>
			</div>
		</>
	);
}
