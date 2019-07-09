import { handleActions } from "redux-actions";
import { servicesSuccess, servicesRequest } from "../actions/services";

const services = handleActions(
	new Map([
		[
			servicesSuccess,
			(state, action) => {
				return {
					...state,
					data: [...action.payload.data],
					loading: true,
					service: action.payload.service
				};
			}
		],
		[
			servicesRequest,
			(state, action) => {
				return {
					...state,
					loading: false
				};
			}
		]
	]),
	{
		data: [],
		loading: false,
		service: null
	}
);
export default services;
export const getData = state => state.services.data;
export const getLastfmLoadingStatus = state => state.services.loading;
export const getService = state => state.services.service;
