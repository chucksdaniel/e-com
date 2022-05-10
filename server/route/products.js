const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	console.log("Product route");
});

module.exports = router;
