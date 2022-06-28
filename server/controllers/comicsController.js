const asyncHandler = require("express-async-handler");
const Comic = require("../model/comicModel");
const { getApiComicDetail } = require("../services/comicDetailService");

// @desc    Get comics
// @route   GET /api/comics
// @access  Public
const getComics = asyncHandler(async (req, res) => {
	const comics = await Comic.find();
	res.status(200).json(comics);
});

// @desc    Get comic details
// @route   GET /api/comics/:id
// @access  Public
const getComicById = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const comic = await getApiComicDetail(id);
	res.status(200).json(comic);
});

module.exports = {
	getComics,
	getComicById,
};
