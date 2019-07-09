import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import avatar from "./man.svg";
import { selectUser } from "./../../actions/index";
import "./UserList.css";
class UserList extends Component {
	state = { redirect: false };
	handleClick = (id, ev) => {
		this.props.selectUser(id);
		this.setState({ redirect: true });
	};
	render() {
		let users = this.props.users || [];
		if (this.state.redirect) {
			return <Redirect to={{ pathname: "/" }} />;
		}
		let ctx = this;
		return (
			<div className="settings__userlist userlist">
				{users.map((item, i) => (
					<div className="userlist__item" key={"user" + i} onClick={this.handleClick.bind(ctx, i)}>
						<div className="userlist__avatar">
							<img src={avatar} alt="" />
						</div>
						<div className="userlist__userinfo userinfo">
							<div className="userinfo__name">{item.name}</div>
							<div className="userinfo__surname">{item.surname}</div>
							<div className="userinfo__descr">{item.descr} </div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
const mapStateToProps = state => ({});

const mapDispatchToProps = {
	selectUser
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserList);
