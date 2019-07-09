import React, { Component } from "react";
import { connect } from "react-redux";
import "./Settings.css";
import UserList from "./../UserList/UserList";
import AddUser from "./../AddUser/AddUser";
import { userlist, modalActive } from "./../../reducers/users";
import { addUserOpen } from "./../../actions/index";

class Settings extends Component {
	state = {
		modaluser: false
	};
	handleClickNewUser = () => {
		this.props.addUserOpen();
	};
	render() {
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
