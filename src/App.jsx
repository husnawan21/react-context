import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/app-context";

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		const user = {
			name: "John Doe",
			avatar: "https://randomuser.me/api/portraits/men/1.jpg",
		};

		setUser(user);
	}, []);

	const appContextValue = {
		user,
	};
	return (
		<div className="App">
			<h1>React Context</h1>
			<AppContext.Provider value={appContextValue}>
				<Navbar />
			</AppContext.Provider>
		</div>
	);
}

export default App;
