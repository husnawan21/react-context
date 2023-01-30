import { useThemeContext } from "../context/theme-context";

export default function ToggleTheme() {
	const [, dispatch] = useThemeContext();

	return (
		<button onClick={() => dispatch({ type: "toggleTheme" })}>
			Toggle Theme
		</button>
	);
}
