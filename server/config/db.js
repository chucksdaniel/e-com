const mongoose = require("mongoose");
const config = require("./keys");
const db = config.mongoURI;

const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log("DB Connection was successful");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
