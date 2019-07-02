import { addUserRequest, addUserClose, addUserOpen, selectUser } from "../actions";
import { handleActions } from "redux-actions";

const users = handleActions(
	new Map([
		[
			addUserRequest,
			(state, action) => {
				return {
					...state,
					list: [...state.list, action.payload]
				};
			}
		],
		[
			addUserClose,
			(state, action) => {
				return {
					...state,
					modal: false
				};
			}
		],
		[
			addUserOpen,
			(state, action) => {
				return {
					...state,
					modal: true
				};
			}
		],
		[
			selectUser,
			(state, action) => {
				return {
					...state,
					active: action.payload
				};
			}
		]
	]),
	{ list: [], active: null, modal: false }
);
export default users;
export const userlist = state => state.users.list;
export const userActive = state => state.users.active;
export const modalActive = state => state.users.modal;
