import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Provider, connect } from "react-redux";
import createStore from "./store";
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import Info from "./components/Info/Info";
import { isAuth, userActive } from "./reducers/users";
import "./index.css";
const store = createStore();

const WrapRoute = ({ isAuth, active, restrict, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (isAuth === true) {
				if (restrict) {
					if (active === null) {
						return <Redirect to="/settings" />;
					} else {
						return <Component {...props} />;
					}
				} else {
					return <Component {...props} />;
				}
			} else {
				return <Redirect to="/login" />;
			}
		}}
	/>
);

const PrivateRoute = connect(
	state => ({
		isAuth: isAuth(state),
		active: userActive(state)
	}),
	{}
)(WrapRoute);

export default class EntryPoint extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Switch>
						<PrivateRoute restrict={true} exact path="/" component={App} />
						<Route path="/login" component={Login} />
						<PrivateRoute path="/settings" component={Settings} />
						<PrivateRoute restrict={true} path="/info" component={Info} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<EntryPoint />, document.getElementById("root"));
