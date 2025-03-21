const express = require("express");
const userController = require("../controllers/userData");

const router = express.Router();

router.post("/signup",userController.signup);
router.post("/login",userController.login);

module.exports = router;