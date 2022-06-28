const axios = require("axios");

const API_KEY = "8646db9ec6b4177108b48fc2cd9fb13ff0f00c66";

// @desc			Getting comics
const getApiCharacter = async (id) => {
	const character = await axios
		.get(
			`https://comicvine.gamespot.com/api/character/4005-${id}/?api_key=${API_KEY}&format=json`,
		)
		.then(({ data: { results } }) => {
			return {
				name: results.name,
				image: results.image.small_url,
			};
		});

	return character;
};

module.exports = {
	getApiCharacter,
};
