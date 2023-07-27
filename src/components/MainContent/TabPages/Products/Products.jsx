import { productsMockData } from "../../../../constants/mocks/productsMockData";
import LayoutTable from "../LayoutTable";

export default function Products() {
	//конфиг для отображения полей в таблице. В объект помещаем name для thead,а в selector функцию в которую передается массив объектов строки и возвращает value указанных ключей
	const columns = [
		{
			name: "Название",
			selector: row => row.nameFrom1C,
		},
		{
			name: "Артикул",
			selector: row => row.codeFrom1C,
		},
	];

	return (
		<LayoutTable
			data={productsMockData}
			columns={columns}
			modalId={"purchaseEdit"}
			errorText={"Здесь пока нет товаров"}
		/>
	);
}
