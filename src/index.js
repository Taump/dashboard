import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import createStore from "./store";
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Info from "./components/Info/Info";
import "./index.css";
const store = createStore();
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/login" component={Login} />
				<Route path="/settings" component={Settings} />
				<Route path="/info" component={Info} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
