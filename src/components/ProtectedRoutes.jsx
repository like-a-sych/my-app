import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes({ authData }) {
	const location = useLocation();
	console.log(authData.isAuth);
	if (!authData.isAuth) {
		return <Navigate to={"/auth"} state={{ from: location }} />;
	}
	return <Outlet />;
}
