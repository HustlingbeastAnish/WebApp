import React, { useState, useEffect, createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [ currentUser, setCurrentUser ] = useState({
		name: null,
    email: null,

	});
	console.log("from thfhytjyauthservice");

	useEffect(() => {
		const checkLoggedIn = async () => {
			

			try {
				const res = await fetch("/aftertlogin", {
				  method: "GET",
				  headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				  },
				  credentials: "include",
				});
				const data = await res.json();
				const em=data.email;
				const nam=data.name;
				console.log(data);
				if (res.status === 400) {
					const err = new Error(res.error);
					throw err;
			
				  }
				
				  else
				 {
					setCurrentUser({

						name: nam,
                       email: em,
					});
				 }
				  
				
			  } catch (err) {
				console.log(err);

				
				//console.log(setCurrentUser)
			  }
		};

		checkLoggedIn();
	}, []);

	
	return (
		<UserContext.Provider value={{currentUser, setCurrentUser}}>
			{ children}
		</UserContext.Provider>
	);
};


export default UserContext;