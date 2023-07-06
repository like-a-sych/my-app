import style from "./AddItemButton.module.scss";
import Modal from '../Modal/Modal';
import AddModal from '../../components/MainContent/Modals/AddModal';
import { useContext } from "react";
import { MainContext } from "../../context";

export default function AddItem() {

	const {modalState, setModalState} = useContext(MainContext)

  function addButton() {
    setModalState((prev) => ({
			...prev,
			isOpen: true
		}))
  }
  return (
		<>

		<Modal modalState={modalState}>
			<AddModal/>
		</Modal>
    <div className={style["add-item"]}>
      <button
        onClick={addButton}
        className={style["add-item__button"]}
        type="button"
      >
        Добавить акцию
      </button>
    </div>
		</>
  );
}
