const axios = require("axios");
const Comic = require("../model/comicModel");

const API_KEY = "8646db9ec6b4177108b48fc2cd9fb13ff0f00c66";

// @desc      Loading comics in and from DDBB
const loadComics = async () => {
	const comicsAPI = await getApiComics();
	const comicsAdapted = comicsAPI.map((comic) => comicAdapter(comic));

	for (let comic of comicsAdapted) {
		const comicDDBB = await Comic.find({ _id: comic._id });
		if (comicDDBB.length) continue;
		else await createComicOnDDBB(comic);
	}

	return await Comic.find();
};

// @desc			Create comic in DDBB
const createComicOnDDBB = async (comic) => {
	console.log(`Creating ${comic.name}`.cyan);
	await Comic.create(comic).catch((e) => console.log(e));
};

// @desc			Adapt comics with needed format
const comicAdapter = (comic) => {
	const adaptedComic = {
		_id: comic.id,
		name:
			(comic.name ? comic.name : comic.volume.name) + " #" + comic.issue_number,
		date_added: new Date(comic.date_added),
		image: comic.image.small_url,
	};

	return adaptedComic;
};

// @desc			Getting comics
const getApiComics = async () => {
	const comics = await axios
		.get(
			`http://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json&sort=date_added:desc`,
		)
		.then(({ data: { results } }) => results);

	return comics;
};

module.exports = loadComics;
