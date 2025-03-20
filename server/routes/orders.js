const express = require("express");
const orderController = require("../controllers/orders");

const router = express.Router();

router.post("/orders", orderController.placeOrder);

module.exports = router;