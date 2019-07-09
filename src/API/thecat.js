import axios from "axios";
const thecat = () =>
	axios({
		method: "get",
		url: "https://api.thecatapi.com/v1/breeds"
	}).then(res => {
		return res.data;
	});
export default thecat;
