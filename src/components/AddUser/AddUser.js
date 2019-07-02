import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserRequest, addUserClose } from "./../../actions/index";
import "./AddUser.css";
class AddUser extends Component {
	state = {
		name: "",
		surname: "",
		descr: ""
	};
	handeleChangeName = ev => {
		this.setState({ name: ev.target.value });
	};
	handeleChangeSurname = ev => {
		this.setState({ surname: ev.target.value });
	};
	handeleChangeDescr = ev => {
		this.setState({ descr: ev.target.value });
	};
	handeleClick = () => {
		if (
			this.state.name.length >= 3 &&
			this.state.surname.length >= 3 &&
			this.state.descr.length >= 5 &&
			this.state.descr.length < 40
		) {
			this.setState({ name: "", surname: "", descr: "", redirect: true });
			this.props.addUserRequest({ name: this.state.name, surname: this.state.surname, descr: this.state.descr });
			this.props.addUserClose();
		}
	};
	render() {
		if (this.props.active) {
			return (
				<div className="AddUser">
					<div className="AddUser__wrap">
						<h4>Добавление пользователя</h4>
						<div className="AddUser__formcreate formcreate">
							<input
								className="formcreate__input"
								type="text"
								placeholder="Имя"
								value={this.state.name}
								onChange={this.handeleChangeName}
							/>
							<input
								className="formcreate__input"
								type="text"
								placeholder="Фамилия"
								value={this.state.firstname}
								onChange={this.handeleChangeSurname}
							/>
							<textarea
								className="formcreate__input"
								type="text"
								placeholder="Информация"
								value={this.state.descr}
								onChange={this.handeleChangeDescr}
							/>
							<input className="formcreate__button" type="submit" value="Добавить" onClick={this.handeleClick} />
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

const mapStateToProps = state => ({
	
});
const mapDispatchToProps = {
	addUserRequest,
	addUserClose
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUser);
