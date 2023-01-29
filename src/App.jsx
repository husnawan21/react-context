import { useEffect, useState } from "react";
import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppContext } from "./context/app-context";

function App() {
	const [user, setUser] = useState({});
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const user = {
			name: "John Doe",
			avatar: "https://randomuser.me/api/portraits/men/32.jpg",
		};

		setUser(user);
	}, []);

	const appContextValue = {
		user,
		setUser,
		theme,
		setTheme,
	};
	return (
		<div className="App">
			<h1>React Context</h1>
			<AppContext.Provider value={appContextValue}>
				<Navbar />
				<br />
				<br />
				<Setting />
				<br />
				<br />
				<DisplayTheme />
				<ToggleTheme />
			</AppContext.Provider>
		</div>
	);
}

export default App;
