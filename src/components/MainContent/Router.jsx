import { Route, Routes } from "react-router-dom";
import Products from "./TabPages/Products";
import Users from "./TabPages/Users";
import Category from "./TabPages/Category";
import Cities from "./TabPages/Cities";
import Brands from "./TabPages/Brands";
import Protocols from "./TabPages/Protocols";
import Orders from "./TabPages/Orders";
import Banners from "./TabPages/Banners";
import Seminars from "./TabPages/Seminars";
import Promocodes from "./TabPages/Promocodes";
import AdminButton from "./_AdminButton/AdminButton";
import style from "./Router.module.scss";
import { pathNames } from "../../constants/path";

export default function Router() {
	return (
		<main className={style.main}>
			<div className={style.main__header}>
				<AdminButton />
			</div>
			<div className={style.main__body}>
				<div className={style["main__content"]}>
					<Routes path="/">
						<Route path={pathNames.products} element={<Products />} />
						<Route path={pathNames.users} element={<Users />} />
						<Route path={pathNames.category} element={<Category />} />
						<Route path={pathNames.cities} element={<Cities />} />
						<Route path={pathNames.brands} element={<Brands />} />
						<Route path={pathNames.protocols} element={<Protocols />} />
						<Route path={pathNames.orders} element={<Orders />} />
						<Route path={pathNames.banners} element={<Banners />} />
						<Route path={pathNames.seminars} element={<Seminars />} />
						<Route path={pathNames.promocodes} element={<Promocodes />} />
						<Route path="/*" element={<div>404</div>} />
					</Routes>
				</div>
			</div>
		</main>
	);
}
