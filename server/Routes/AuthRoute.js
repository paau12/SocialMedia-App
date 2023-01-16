import express from "express";
import { logInUser, registerUser } from "../Controllers/AuthController.js";

const router = express.Router()

// router.get('/', async(req, res)=>{res.send("Auth response")})
router.post('/register', registerUser)
router.post('/login', logInUser)
 
export default router