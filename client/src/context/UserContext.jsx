import { createContext, useState } from "react";

const UserContext = createContext({});

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	const login = () => {
		console.log("njjmok");
	};

	const logout = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, login, logout }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserProvider, UserContext };