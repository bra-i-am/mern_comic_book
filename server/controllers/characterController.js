const asyncHandler = require("express-async-handler");
const { getApiCharacter } = require("../services/characterService");

// @desc    Get comic details
// @route   GET /api/comics/:id
// @access  Public
const getCharacterById = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const comic = await getApiCharacter(id);
	res.status(200).json(comic);
});

module.exports = {
	getCharacterById,
};
