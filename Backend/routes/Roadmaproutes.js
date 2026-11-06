import express from "express";
import { deleteRoadmap, generateRoadmap, getMyRoadmaps } from "../controller/Roadmapcontroller.js";
import { verifyToken } from "../controller/Authcontroller.js";

const roadrouter = express.Router();

roadrouter.post("/generate", verifyToken, generateRoadmap);

roadrouter.get("/my-roadmaps", verifyToken, getMyRoadmaps);
roadrouter.delete("/delete/:id", verifyToken, deleteRoadmap);

export default roadrouter;