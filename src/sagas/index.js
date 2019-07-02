import { fork } from "redux-saga/effects";

import onLoginWatch from "./login";
import onLastFmWatch from "./lastfm";

export default function*() {
	yield fork(onLoginWatch);
	yield fork(onLastFmWatch);
}
