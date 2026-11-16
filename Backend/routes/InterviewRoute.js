
import express from "express";
import { generateInterview, getMyInterviews ,evaluateInterview } from "../controller/InterviewController.js";
import { verifyToken } from "../controller/Authcontroller.js";

const Interviewrouter = express.Router();

Interviewrouter.post("/generate", verifyToken, generateInterview);
Interviewrouter.get("/my-interviews", verifyToken, getMyInterviews);
Interviewrouter.post("/evaluate", verifyToken, evaluateInterview);

export default Interviewrouter;
