import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userActive, userlist, userService } from "./../../reducers/users";
import { connect } from "react-redux";
import { selectUser } from "./../../actions/index";
import { servicesRequest } from "./../../actions/services";
import music from "./music.svg";
import cat from "./cat.svg";
import "../App/App.css";

const services = [
	{
		name: "Last.fm",
		image: music,
		descr: "Можно получить список популярных исполнителей",
		code: "lastfm"
	},
	{
		name: "thecatapi",
		image: cat,
		descr: "Можно получить список пород кошек",
		code: "thecat"
	}
];
class App extends Component {
	handleChange = event => {
		this.props.selectUser(Number(event.target.value));
	};
	hcr = service => {
		this.props.servicesRequest(service);
	};
	render() {
		let service = services[this.props.userService - 1];
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
						<Link to="/info" className="board__itemcard itemcard" onClick={this.hcr.bind(this, service.code)}>
							<div className="itemcard__logo">
								<img src={service.image} width={70} alt={service.code} />
							</div>
							<div className="itemcard__name">{service.name}</div>
							<div className="itemcard__descr">{service.descr}</div>
						</Link>
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userActive: userActive(state),
	userlist: userlist(state),
	userService: userService(state)
});
const mapDispatchToProps = { selectUser, servicesRequest };
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
