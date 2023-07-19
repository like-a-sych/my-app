import { useState } from "react";

export function useAuth() {
	const [isAuth, setAuth] = useState(false);

	console.log(isAuth);

	function handleLogout() {
		setAuth(false);
	}

	return {
		setAuth,
		isAuth,
		handleLogout,
	};
}
