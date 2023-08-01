import AddSaleModal from "../components/MainContent/Modals/AddSaleModal/AddSaleModal";
import ProductEditModal from "../components/MainContent/Modals/ProductEditModal/ProductEditModal";
import TestModal from "../components/MainContent/Modals/TestModal";

export const ComponentsList = {
	//объект компонентов, которые передаются в модальное окно
	addSale: <AddSaleModal />,
	testComponent: <TestModal />,
	purchaseEdit: <ProductEditModal />,
};
