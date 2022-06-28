const express = require("express");
const router = express.Router();
const { getTeamById } = require("../controllers/teamController");

router.get("/:id", getTeamById);

module.exports = router;
