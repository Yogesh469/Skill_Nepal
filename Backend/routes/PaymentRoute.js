import express from "express";
import { initiatePayment } from "../controllers/PaymentController.js";
import { verifyToken } from "../controller/Authcontroller.js";

const payrouter = express.Router();


payrouter.post("/initiate", verifyToken, initiatePayment);

export default payrouter;