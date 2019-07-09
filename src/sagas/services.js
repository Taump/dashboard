import { takeLatest, call, put } from "redux-saga/effects";
import { servicesRequest, servicesSuccess, servicesFailure } from "../actions/services";
import fetchLastFm from "./../API/lastfm";
import fetchTheCat from "./../API/thecat";
function* onServicesReuest({ payload }) {
	try {
		let data;
		if (payload === "lastfm") {
			data = yield call(fetchLastFm);
		} else if (payload === "thecat") {
			data = yield call(fetchTheCat);
		}
		yield put(servicesSuccess({ data, service: payload }));
	} catch (errors) {
		yield put(servicesFailure(errors));
	}
}

function* onFetchServicesWatch() {
	yield takeLatest(servicesRequest, onServicesReuest);
}

export default onFetchServicesWatch;
