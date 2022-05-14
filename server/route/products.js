const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = require("../middleware/auth");
const Product = require("../models/Product");

router.get("/", (req, res) => {
	console.log("Product route");
});

router.post(
	"/",
	[
		auth,
		[
			check("name", "Product name is required").not().isEmpty(),
			check("description", "Product description is required")
				.not()
				.isEmpty(),
			check("category", "Product category is required").not().isEmpty(),
			check("price", "Product price is required").not().isEmpty(),
			check("quantity", "Product quantity is required").not().isEmpty(),
		],
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { name, description, category, price, quantity } = req.body;

		try {
			const newProduct = new Product({
				userId: req.user.id,
				name,
				description,
				category,
				price,
				quantity,
			});

			const product = await newProduct.save();
			res.json({ product });
		} catch (error) {
			console.error(error);
			res.status(500).send("Server error");
		}
	}
);

module.exports = router;
