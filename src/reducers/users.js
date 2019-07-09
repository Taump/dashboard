import { addUserRequest, addUserClose, addUserOpen, selectUser, loginSuccess } from "../actions";
import { handleActions } from "redux-actions";
const token = window.localStorage.getItem("token");

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
		],
		[
			loginSuccess,
			(state, action) => {
				return {
					...state,
					isAuth: true
				};
			}
		]
	]),
	{
		list: [],
		active: null,
		modal: false,
		isAuth: token !== null && token !== undefined
	}
);
export default users;
export const userlist = state => state.users.list;
export const userActive = state => state.users.active;
export const modalActive = state => state.users.modal;
export const userService = state => state.users.list[state.users.active].service;
export const isAuth = state => state.users.isAuth;
// loginSuccess
