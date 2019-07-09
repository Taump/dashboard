import { fork } from "redux-saga/effects";

import onLoginWatch from "./login";
import onFetchServicesWatch from "./services";

export default function*() {
	yield fork(onLoginWatch);
	yield fork(onFetchServicesWatch);
}
