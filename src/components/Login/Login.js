import React, { Component } from "react";
import { connect } from "react-redux";
import sha256 from "js-sha256";
import { loginRequest } from "./../../actions/index";
import { Redirect } from "react-router-dom";
import "./Login.css";
class Login extends Component {
	state = {
		login: "",
		pass: "",
		err: "",
		redirect: false
	};
	handeleChangeLogin = ev => {
		this.setState({
			login: ev.target.value
		});
	};
	handeleChangePass = ev => {
		this.setState({
			pass: ev.target.value
		});
	};
	handeleClick = () => {
		if (this.state.login.length > 3 && this.state.pass.length >= 6) {
			this.setState({
				err: "",
				redirect: true
			});
			let hash = sha256(this.state.login + this.state.pass);
			this.props.loginRequest({ hash });
		} else {
			this.setState({
				err: "Логин должен содержать более 3х символов, а пароль 6 и более"
			});
		}
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={{ pathname: "/settings" }} />;
		}
		return (
			<div className="login">
				<div className="login__wrap">
					<div className="login__information">{this.state.err}</div>
					<h2 className="login__header">Авторизация</h2>
					<div className="login__form form">
						<input
							className="form__input"
							type="text"
							placeholder="Логин"
							value={this.state.login}
							onChange={this.handeleChangeLogin}
						/>
						<input
							className="form__input"
							type="password"
							placeholder="Пароль"
							value={this.state.pass}
							onChange={this.handeleChangePass}
						/>
						<input className="form__button" type="submit" value="Войти" onClick={this.handeleClick} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
	loginRequest
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
