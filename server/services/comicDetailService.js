const axios = require("axios");

const API_KEY = "8646db9ec6b4177108b48fc2cd9fb13ff0f00c66";

// @desc			Getting comics
const getApiComicDetail = async (id) => {
	const comics = await axios
		.get(
			`https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json`,
		)
		.then(({ data: { results } }) => {
			return {
				name: results.name ? results.name : results.volume.name,
				characters: results.character_credits,
				team: results.team_credits,
				location: results.location_credits,
				image: results.image.original_url,
			};
		});

	return comics;
};

module.exports = {
	getApiComicDetail,
};
