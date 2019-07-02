import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { userActive, userlist } from "./../../reducers/users";
import { getData, getLastfmLoadingStatus } from "./../../reducers/lastfm";
import "./Info.css";
class Info extends Component {
	state = {
		redirect: false,
		path: ""
	};
	componentWillMount() {
		let token = localStorage.getItem("token");
		if (token === null) {
			this.setState({ redirect: true, path: "/login" });
		}
		if (this.props.userActive === null) {
			this.setState({ redirect: true, path: "/settings" });
		}
	}
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
					<div className="data__grid grid">
						<h2>Рейтинг артистов на Last.fm</h2>
						<div className="grid__row grid_row_title">
							<div className="grid__field">Имя артиста</div>
							<div className="grid__field">Кол-во прослушиваний</div>
							<div className="grid__field">Кол-во слушателей</div>
							<div className="grid__field">Ссылка</div>
						</div>
						{this.props.LoadingStatus ? (
							this.props.data.map(item => {
								return (
									<div className="grid__row" key={item.mbid + item.name}>
										<div className="grid__field">{item.name}</div>
										<div className="grid__field">{item.playcount}</div>
										<div className="grid__field">{item.listeners}</div>
										<div className="grid__field">
											<a href={item.url} target="_blank">
												Перейти на сайт
											</a>
										</div>
									</div>
								);
							})
						) : (
							<div>Идет загрузка...</div>
						)}
					</div>
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	userActive: userActive(state),
	userlist: userlist(state),
	data: getData(state),
	LoadingStatus: getLastfmLoadingStatus(state)
});
const mapDispatchToProps = {};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);
