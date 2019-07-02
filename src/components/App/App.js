import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { userActive, userlist } from "./../../reducers/users";
import { connect } from "react-redux";
import { selectUser } from "./../../actions/index";
import { lastfmRequest } from "./../../actions/lastfm";
import music from "./music.svg";
import "../App/App.css";
class App extends Component {
	state = {
		redirect: false,
		path: ""
	};
	componentWillMount() {
		console.log("AAAAPPPP", this.props.userActive);
		let token = localStorage.getItem("token");
		console.log("test", token);
		if (token === null) {
			this.setState({ redirect: true, path: "/login" });
		}
		if (this.props.userActive === null) {
			this.setState({ redirect: true, path: "/settings" });
		}
	}
	handleChange = event => {
		this.props.selectUser(Number(event.target.value));
	};
	hcr = () => {
		this.props.lastfmRequest();
	};
	render() {
		if (this.state.redirect) {
			return <Redirect to={{ pathname: this.state.path }} />;
		}

		return (
			<div>
				<header>
					<select defaultValue={this.props.userActive} onChange={this.handleChange}>
						{this.props.userlist.map((item, i) => (
							<option key={"user" + i} value={i}>
								{item.name + " " + item.surname}
							</option>
						))}
					</select>

					<Link to="/settings">Создать пользователя</Link>
				</header>
				<main>
					<div className="board">
						<Link to="/info" className="board__itemcard itemcard" onClick={this.hcr}>
							<div className="itemcard__logo">
								<img src={music} width={70} />
							</div>
							<div className="itemcard__name">Last.fm</div>
							<div className="itemcard__descr">Можно получить список популярных исполнителей</div>
						</Link>
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userActive: userActive(state),
	userlist: userlist(state)
});
const mapDispatchToProps = { selectUser, lastfmRequest };
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
