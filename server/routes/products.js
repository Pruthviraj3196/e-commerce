const express = require("express");
const productController = require("../controllers/products");

const router = express.Router();

router.get("/products",productController.allproducts)

module.exports = router;