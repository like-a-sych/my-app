import { UsersMockData } from "../../../../constants/mocks/UsersMockData";
import LayoutTable from "../LayoutTable";

export default function Users() {
	//конфиг для отображения полей в таблице. В объект помещаем name для thead,а в selector функцию в которую передается массив объектов строки и возвращает value указанных ключей
	const columns = [
		{
			name: "ФИ",
			selector: row => {
				return row.name + " " + row.lastName;
			},
		},
		{
			name: "Почта",
			selector: row => row.email,
		},
		{
			name: "Телефон",
			selector: row => row.phone,
		},
	];
	return (
		<LayoutTable
			columns={columns}
			data={UsersMockData}
			modalId=""
			errorText="Здесь пока нет пользователей"
		/>
	);
}
