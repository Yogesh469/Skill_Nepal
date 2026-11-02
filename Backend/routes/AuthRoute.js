import express from "express"
import { GetProfile, LoginUser, RegisterUser , verifyToken } from "../controller/Authcontroller.js"

const Authroute =express.Router()
 
Authroute.post("/Reguser" ,RegisterUser)
Authroute.post("/Loginuser", LoginUser)
Authroute.get("/profile" ,  verifyToken, GetProfile)

export default Authroute