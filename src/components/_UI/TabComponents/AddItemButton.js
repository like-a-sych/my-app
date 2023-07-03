import style from "./AddItemButton.module.scss";

export default function AddItem() {
  function addButton() {
    console.log("Добавить");
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
