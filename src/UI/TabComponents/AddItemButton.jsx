import { useContext } from "react";
import { MainContext } from "../../context";
import style from "./AddItemButton.module.scss";

export default function AddItem() {

	const {setModalState} = useContext(MainContext)

  function addButton() {
    setModalState('addSale');
  }
  return (
    <div className={style["add-item"]}>
      <button
        onClick={addButton}
        className={style["add-item__button"]}
        type="button"
      >
        Добавить акцию
      </button>
    </div>
		
  );
}
