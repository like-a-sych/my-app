import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { MainContext } from "../context";
import LoginFormLayout from "./Public/LoginFormLayout";

export default function ProtectedRoutes() {
	const { isAuth } = useContext(MainContext);
	return isAuth ? <Outlet /> : <LoginFormLayout />;
}
