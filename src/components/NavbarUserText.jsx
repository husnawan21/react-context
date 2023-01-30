import { useAppContext } from "../context/app-context";

export default function NavbarUserText() {
	const [state] = useAppContext();
	return (
		<span>
			Hi, <b>{state?.user?.name}!</b>
		</span>
	);
}
