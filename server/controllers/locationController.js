const asyncHandler = require("express-async-handler");
const { getApiLocation } = require("../services/locationService");

// @desc    Get comic details
// @route   GET /api/comics/:id
// @access  Public
const getLocationById = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const comic = await getApiLocation(id);
	res.status(200).json(comic);
});

module.exports = {
	getLocationById,
};
