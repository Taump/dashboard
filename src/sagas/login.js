import { takeLatest, put } from "redux-saga/effects";
import { loginRequest, loginFailure, loginSuccess } from "../actions";

function* onLoginRequest({ payload }) {
	try {
		yield window.localStorage.setItem("token", payload.hash);
		yield put(loginSuccess());
	} catch (errors) {
		yield put(loginFailure(errors));
	}
}

function* onFetchLoginWatch() {
	yield takeLatest(loginRequest, onLoginRequest);
}

export default onFetchLoginWatch;
