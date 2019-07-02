import { createActions } from "redux-actions";

export const {
	loginRequest,
	loginSuccess,
	loginFailure,
	addUserRequest,
	addUserOpen,
	addUserClose,
	selectUser,
	lastfmReuest,
	lastfmSuccess,
	lastfmFailure
} = createActions(
	"LOGIN_REQUEST",
	"LOGIN_SUCCESS",
	"LOGIN_FAILURE",
	"ADD_USER_REQUEST",
	"ADD_USER_OPEN",
	"ADD_USER_CLOSE",
	"SELECT_USER",
	"LAST_FM_REQUEST",
	"LAST_FM_SUCCESS",
	"LAST_FM_FAILURE"
);
