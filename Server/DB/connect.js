const mongoose = require('mongoose')
const connectDB = async (url) => {
	try {
		mongoose.set("strictQuery", true);
		await mongoose.connect(url);
		console.log("mongoDB connected");
	} catch (error) {
		console.log(error);
	}
};

module.exports = connectDB