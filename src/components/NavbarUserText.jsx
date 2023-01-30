import { useAppContext } from "../context/app-context";

export default function NavbarUserText() {
	const [state] = useAppContext();

	console.log("NavbarUserText: render");
	return (
		<span>
			Hi, <b>{state?.user?.name}!</b>
		</span>
	);
}
