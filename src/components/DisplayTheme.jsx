import { useThemeContext } from "../context/theme-context";

export default function DisplayTheme() {
	const [state] = useThemeContext();

	console.log("DisplayTheme: render");
	return <div>{state.theme}</div>;
}
