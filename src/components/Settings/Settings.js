import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./Settings.css";
import UserList from "./../UserList/UserList";
import AddUser from "./../AddUser/AddUser";
import { userlist, modalActive } from "./../../reducers/users";
import { addUserOpen } from "./../../actions/index";

class Settings extends Component {
	state = {
		redirect: false,
		modaluser: false
	};
	componentWillMount() {
		let token = localStorage.getItem("token");

		if (token === null) {
			this.setState({ redirect: true, path: "/login" });
		}
	}
	handleClickNewUser = () => {
		this.props.addUserOpen();
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={{ pathname: this.state.path }} />;
		}
		return (
			<div className="settings">
				<div className="settings__adduser" onClick={this.handleClickNewUser}>
					Создать нового пользователя
				</div>
				<AddUser active={this.props.modalActive} />
				<UserList users={this.props.users} />
			</div>
		);
	}
}
const mapStateToProps = state => ({
	users: userlist(state),
	modalActive: modalActive(state)
});
const mapDispatchToProps = { addUserOpen };
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Settings);
