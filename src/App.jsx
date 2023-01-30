import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppProvider } from "./context/app-context";
import { ThemeProvider } from "./context/theme-context";

function App() {
	return (
		<div className="App">
			<h1>React Context</h1>
			<AppProvider>
				<ThemeProvider>
					<Navbar />
					<br />
					<br />
					<Setting />
					<br />
					<br />
					<DisplayTheme />
					<ToggleTheme />
					<p>Penghitung dosamu</p>
				</ThemeProvider>
			</AppProvider>
		</div>
	);
}

export default App;
