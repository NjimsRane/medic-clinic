import { useEffect, createContext, useState } from "react";


const UserContext = createContext({});

const UserProvider = ({ children }) => {

	const [currentUser, setCurrentUser] = useState(
		JSON.parse(`${localStorage.getItem('patient')}`) || null
	);


	useEffect(() => {
		localStorage.setItem('patient', JSON.stringify(currentUser));
	}, [currentUser]);

	const login = () => {
		console.log('soussou');
	};

	return <UserContext.Provider value={{ login, currentUser }}>{children}</UserContext.Provider>;
};

export { UserProvider, UserContext };
