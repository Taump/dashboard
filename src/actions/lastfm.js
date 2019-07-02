import { createActions } from "redux-actions";

export const { lastfmRequest, lastfmSuccess, lastfmFailure } = createActions(
	"LASTFM_REQUEST",
	"LASTFM_SUCCESS",
	"LASTFM_FAILURE"
);
