const { Schema, model } = require("mongoose");

const ComicSchema = new Schema({
	_id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	date_added: {
		type: Date,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	favoritedBy: [
		{
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	],
});

module.exports = model("Comic", ComicSchema);
