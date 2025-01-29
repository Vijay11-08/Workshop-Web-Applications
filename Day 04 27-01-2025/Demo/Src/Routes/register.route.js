const express = require("express");
const router = express.Router();
const registerController = require("../Controllers/register.controller");

router.get("/",registerController.getRegister);
router.post('/register', registerController.addRegister);

module.exports = router;
