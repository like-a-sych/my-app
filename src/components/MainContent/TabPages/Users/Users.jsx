import { usersMockData } from "../../../../constants/mocks/usersMockData";
import LayoutTable from "../LayoutTable";

import style from "./Users.module.scss";

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
		<div className={style["users-page"]}>
			<LayoutTable
				hasCheckbox={false}
				columns={columns}
				data={usersMockData}
				idModal=""
				errorText="Здесь пока нет пользователей"
				pageClass="usersPage"
			/>
		</div>
	);
}
