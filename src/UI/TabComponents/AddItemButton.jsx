import style from "./AddItemButton.module.scss";
import Modal from '../Modal/Modal';
import AddSaleModal from '../../components/MainContent/Modals/AddSaleModal';
import { useContext } from "react";
import { MainContext } from "../../context";

export default function AddItem() {

	const {modalState, setModalState} = useContext(MainContext)

  function addButton() {
    setModalState((prev) => ({
			...prev,
			isOpen: true,
			idModal: 'addSale',
		}))
  }
  return (
		<>
		{(modalState.idModal === 'addSale') &&  <Modal modalState={modalState}>
			<AddSaleModal/>
		</Modal>}
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
