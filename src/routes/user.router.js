import userController from "../controllers/user.controller.js"
import express from "express"

const router = express.Router()

router.post("/register", userController.register)
router.post("/login", userController.login)

export {router}
