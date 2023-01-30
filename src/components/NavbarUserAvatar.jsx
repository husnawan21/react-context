import { useAppContext } from "../context/app-context";

export default function NavbarUserAvatar() {
	const [state] = useAppContext();

	console.log("NavbarUserAvatar: render");
	return <img src={state?.user?.avatar} alt="avatar" />;
}
