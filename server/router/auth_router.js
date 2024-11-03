const express = require("express")
const router = express.Router();
const validate = require("../errorMiddleWare/ValidateMiddleWare")
const authController = require("../controller/auth_controller")
const schemaValid = require("../validator/authValidator")

router.route("/register").post(validate(schemaValid),authController.register)
router.route("/login").post(authController.login)

module.exports = router