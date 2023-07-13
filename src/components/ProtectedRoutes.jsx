import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MainContext } from "../context";
import Login from "./MainContent/Public/Login/Login";

export default function ProtectedRoutes() {
	const { isAuth } = useContext(MainContext);
	return isAuth ? <Outlet /> : <Login />;
}
