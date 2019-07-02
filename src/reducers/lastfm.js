import { handleAction } from "redux-actions";
import { lastfmSuccess } from "../actions/lastfm";

const lastfm = handleAction(
	lastfmSuccess,
	(state, action) => {
		return {
			...state,
			data: [...action.payload],
			loading: true
		};
	},
	{ data: [], loading: false }
);
export default lastfm;
export const getData = state => state.lastfm.data;
export const getLastfmLoadingStatus = state => state.lastfm.loading;
