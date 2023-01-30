import { useAppContext } from "../context/app-context";

export default function Setting() {
	const [state, dispatch] = useAppContext();

	return (
		<input
			className="input"
			type="text"
			onChange={(e) =>
				dispatch({
					type: "updateUser",
					payload: {
						...state.user,
						name: e.target.value,
					},
				})
			}
			placeholder="Change name"
			value={state.user.name}
		/>
	);
}
