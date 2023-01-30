import { useAppContext } from "../context/app-context";

export default function ToggleTheme() {
	const [, dispatch] = useAppContext();

	return (
		<button onClick={() => dispatch({ type: "toggleTheme" })}>
			Toggle Theme
		</button>
	);
}
