import { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function NavbarUserText() {
	const context = useContext(AppContext);

	return (
		<span>
			Hi, <b>{context.user.name}!</b>
		</span>
	);
}
