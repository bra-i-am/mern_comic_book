const express = require("express");
const router = express.Router();

router.use("/comics", require("./comicsRoutes"));
router.use("/character", require("./characterRoutes"));
router.use("/team", require("./teamRoutes"));
router.use("/location", require("./locationRoutes"));

module.exports = router;
