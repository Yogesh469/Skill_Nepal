
import { PDFParse } from "pdf-parse";
import { analyzeResume } from "../services/ResumeAnal.js";
import ResumeAnalschema from "../models/ResumeAnalschema.js";

export const ResumeAnal = async (req, res) => {

    let parser;

    try {


        if (!req.file) {
            return res.status(400).json({
                message: "Please upload your resume PDF"
            });
        }


        parser = new PDFParse({
            data: req.file.buffer
        });


        const result = await parser.getText();

        const resumeText = result.text;


        if (!resumeText || !resumeText.trim()) {
            return res.status(400).json({
                message: "Could not extract text from this PDF"
            });
        }


        const aiResponse = await analyzeResume(resumeText);


        const analysis = JSON.parse(
            aiResponse.replace(/```json|```/g, "").trim()
        );

        const savedResume = await ResumeAnalschema.create({
            userId: req.user.id,
            fileName: req.file.originalname,
            score: analysis.score,
            summary: analysis.summary,
            strengths: analysis.strengths,
            weaknesses: analysis.weaknesses,
            suggestions: analysis.suggestions
        });


        return res.status(200).json({
            message: "Resume analyzed successfully",
            fileName: req.file.originalname,
            analysis: analysis
        });



    } catch (error) {

        return res.status(500).json({
            message: "Resume analysis failed",
            error: error.message
        });

    } finally {

        if (parser) {
            await parser.destroy();
        }

    }

};


export const GetResumeAnal = async (req, res) => {

    try {

        const resumes = await ResumeAnalschema.find({
            userId: req.user.id
        }).sort({ createdAt: -1 });

        res.status(200).json({
            message: "Resume history fetched successfully",
            resumes: resumes
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to fetch resume history",
            error: error.message
        });

    }

};
