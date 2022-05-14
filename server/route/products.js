const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const router = express.Router();

const auth = require("../middleware/auth");
const Product = require("../models/Product");

/**
 * @route   POST api/products
 * @desc    Create product for sells
 * @access  Private (Required that a user be log in)
 */

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

		console.log(req.body);
		console.log(req.user);

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

/**
 * @route   GET api/products
 * @desc    Get all products for sells
 * @access  Public
 */

router.get("/", async (req, res) => {
	// console.log("Product route");
	try {
		const products = await Product.find();
		res.json({ products });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

/**
 * @route   GET api/products
 * @desc    Get a particular product for sells
 * @access  Public
 */

router.get("/:id", async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) {
			return res.status(400).json({ msg: "Product not found" });
		}
		res.json({ product });
	} catch (error) {
		console.error(error.message);
		res.status(500).send("Server error");
	}
});

module.exports = router;

/**
 * {
    "name": "Car",
    "description": "Red Toyota Spider",
    "category": "Toyota New",
    "price": "500000",
    "quantity": "50"
}

{
    "name": "HP 1030",
    "description": "Portable and durable laptop",
    "category": "Electronics",
    "price": 500,
    "quantity": 30
    "brand": "HP"
}
 */
