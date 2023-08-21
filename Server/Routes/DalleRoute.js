const express = require("express");
const router = express.Router();
const OpenAI = require("openai");



const openai = new OpenAI({
  apiKey:process.env.OPEN_API_KEY
});

router.route("/").post(async (req, res) => {
	try {
		
		const { prompt } = req.body;

		const aiResponse = await openai.images.generate({
			prompt,
			n: 1,
			size: "1024x1024",
			response_format: "b64_json",
		}); 
		
 
		const image = aiResponse.data[0].b64_json;
		res.status(201).json({ photo: image });
		
	} catch (error) {
		console.log(error);
		res.status(500).json({ msg: "could not generate image" });
	}
});

module.exports = router;
