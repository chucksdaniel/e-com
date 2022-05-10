const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("User's route");
});

router.post("/", (req, res) => {
	console.log(req.body);

	res.send("Users route for Post method");
});

module.exports = router;
