const express = require("express");
const router = express.Router();
const { getComics, getComicById } = require("../controllers/comicsController");

router.get("/", getComics);
router.get("/:id", getComicById);

module.exports = router;
