import express from "express"
import multer from "multer"
import {GetResumeAnal, ResumeAnal} from "../controller/ResumeAnalcontroller.js"
import { verifyToken } from "../controller/Authcontroller.js"

const Reumeanalrouter = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {

        if (file.mimetype === "application/pdf") {
            cb(null, true);
        } else {
            cb(new Error("Only PDF files are allowed"));
        }

    }
});

Reumeanalrouter.post("/analyze", verifyToken, upload.single("resume"), ResumeAnal);
Reumeanalrouter.get("/my-resume" ,verifyToken, GetResumeAnal);

export default Reumeanalrouter;