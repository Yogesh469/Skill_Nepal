import express from "express"
import { GetProfile, LoginUser, LogoutUser, RegisterUser , verifyToken } from "../controller/Authcontroller.js"

const Authroute =express.Router()
 
Authroute.post("/Reguser" ,RegisterUser)
Authroute.post("/Loginuser", LoginUser)
Authroute.get("/profile" ,  verifyToken, GetProfile)
Authroute.post("/Logoutuser", LogoutUser)

export default Authroute