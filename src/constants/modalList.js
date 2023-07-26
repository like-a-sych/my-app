import AddSaleModal from "../components/MainContent/Modals/AddSaleModal/AddSaleModal";
import PurchaseEditModal from "../components/MainContent/Modals/PurchaseEditModal/PurchaseEditModal";
import TestModal from "../components/MainContent/Modals/TestModal";

export const ComponentsList = {
	//объект компонентов, которые передаются в модальное окно
	addSale: <AddSaleModal />,
	testComponent: <TestModal />,
	purchaseEdit: <PurchaseEditModal />,
};
