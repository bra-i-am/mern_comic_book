const express = require("express");
const router = express.Router();
const { getLocationById } = require("../controllers/locationController");

router.get("/:id", getLocationById);

module.exports = router;
