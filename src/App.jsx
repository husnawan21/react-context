import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppProvider } from "./context/app-context";

function App() {
	return (
		<div className="App">
			<h1>React Context</h1>
			<AppProvider>
				<Navbar />
				<br />
				<br />
				<Setting />
				<br />
				<br />
				<DisplayTheme />
				<ToggleTheme />
				<p>Penghitung dosamu</p>
			</AppProvider>
		</div>
	);
}

export default App;
