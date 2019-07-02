import { takeLatest, put } from "redux-saga/effects";
import { loginRequest, loginFailure } from "../actions";

function* onLoginRequest({ payload }) {
	try {
		yield window.localStorage.setItem("token", payload.hash);
	} catch (errors) {
		yield put(loginFailure(errors));
	}
}

function* onFetchLoginWatch() {
	yield takeLatest(loginRequest, onLoginRequest);
}

export default onFetchLoginWatch;
