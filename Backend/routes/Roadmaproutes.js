import express from "express";
import { generateRoadmap, getMyRoadmaps } from "../controller/Roadmapcontroller.js";
import { verifyToken } from "../controller/Authcontroller.js";

const roadrouter = express.Router();

roadrouter.post("/generate", verifyToken, generateRoadmap);

roadrouter.get("/my-roadmaps", verifyToken, getMyRoadmaps);

export default roadrouter;