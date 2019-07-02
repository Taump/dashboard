import { takeLatest, call, put } from "redux-saga/effects";
import { lastfmRequest, lastfmSuccess, lastfmFailure } from "../actions/lastfm";
import fetchLastFm from "./../API/lastfm";
function* onLastfmReuest({ payload }) {
	try {
		const data = yield call(fetchLastFm);
		console.log(data);
		yield put(lastfmSuccess(data));
	} catch (errors) {
		yield put(lastfmFailure(errors));
	}
}

function* onFetchLastFmWatch() {
	yield takeLatest(lastfmRequest, onLastfmReuest);
}

export default onFetchLastFmWatch;
