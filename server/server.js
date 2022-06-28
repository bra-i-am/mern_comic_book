const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");
const loadComics = require("./services/comicsService");

require("colors");
require("dotenv").config();

const server = express();
connectDB();

const PORT = process.env.PORT || 5000;

// Cors
server.use(cors());

// Parser
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Logging
server.use(morgan("dev"));

// Router
server.use("/api", require("./routes"));

server.listen(PORT, () => {
	loadComics();

	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.rainbow
			.bold,
	);
});
