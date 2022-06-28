const asyncHandler = require("express-async-handler");
const { getApiTeam } = require("../services/teamService");

// @desc    Get comic details
// @route   GET /api/comics/:id
// @access  Public
const getTeamById = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const comic = await getApiTeam(id);
	res.status(200).json(comic);
});

module.exports = {
	getTeamById,
};
