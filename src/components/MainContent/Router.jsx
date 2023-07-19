import { Route, Routes } from "react-router-dom";
import { pathNames } from "../../constants/path";
import { useAuth } from "../../hooks/useAuth";
import ProtectedRoutes from "../ProtectedRoutes";
import LoginFormLayout from "../Public/LoginFormLayout";
import Layout from "../Layout";
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

export default function Router() {
	const authData = useAuth();
	return (
		<Routes>
			<Route path={pathNames.auth}>
				<Route index element={<LoginFormLayout authData={authData} />} />
				<Route path={pathNames.login} element={<LoginFormLayout />} />
				<Route path={pathNames.register} element={<LoginFormLayout />} />
			</Route>
			<Route element={<ProtectedRoutes isAuth={authData.isAuth} />}>
				<Route
					path="/"
					element={<Layout handleLogout={authData.handleLogout} />}
				>
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
				</Route>
			</Route>
		</Routes>
	);
}
