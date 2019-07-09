import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userActive, userlist } from "./../../reducers/users";
import { getData, getLastfmLoadingStatus, getService } from "./../../reducers/services";
import "./Info.css";
import LastFm from "../LastFm/LastFm";
import TheCat from "../TheCat/TheCat";
class Info extends Component {
	render() {
		return (
			<div>
				<header>
					<Link to="/settings">Создать пользователя</Link>
				</header>
				<main>
					<div className="data__grid grid">
						{this.props.getService === "lastfm" ? <LastFm {...this.props} /> : null}
						{this.props.getService === "thecat" ? <TheCat {...this.props} /> : null}
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
	LoadingStatus: getLastfmLoadingStatus(state),
	getService: getService(state)
});
const mapDispatchToProps = {};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Info);
