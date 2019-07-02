import axios from "axios";
const lastfm = () =>
	axios({
		method: "get",
		url:
			"http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=f148f5cb7da96644ac998f6897a951cb&format=json"
	}).then(res => {
		console.log("API");
		return res.data.artists.artist;
	});
export default lastfm;
