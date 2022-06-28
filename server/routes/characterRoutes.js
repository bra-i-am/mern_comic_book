const express = require("express");
const router = express.Router();
const { getCharacterById } = require("../controllers/characterController");

router.get("/:id", getCharacterById);

module.exports = router;
