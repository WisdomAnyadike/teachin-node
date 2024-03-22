const express = require("express")
const { SignUp } = require("../Controllers/UserController")
const UserRouter = express.Router()

UserRouter.post( '/signup' , SignUp)


module.exports = UserRouter