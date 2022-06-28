const axios = require("axios");

const API_KEY = "8646db9ec6b4177108b48fc2cd9fb13ff0f00c66";

// @desc			Getting comics
const getApiLocation = async (id) => {
	const team = await axios
		.get(
			`https://comicvine.gamespot.com/api/location/4020-${id}/?api_key=${API_KEY}&format=json`,
		)
		.then(({ data: { results } }) => {
			return {
				name: results.name,
				image: results.image.small_url,
			};
		});

	return team;
};

module.exports = {
	getApiLocation,
};
