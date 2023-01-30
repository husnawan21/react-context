import { useAppContext } from "../context/app-context";

export default function DisplayTheme() {
	const [state] = useAppContext();

	return <div>{state.theme}</div>;
}
