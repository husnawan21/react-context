import { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function Setting() {
	const context = useContext(AppContext);

	return (
		<input
			className="input"
			type="text"
			onChange={(e) =>
				context.setUser({
					...context.user,
					name: e.target.value,
				})
			}
			placeholder="Change name"
		/>
	);
}