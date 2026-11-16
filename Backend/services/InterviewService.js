
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";

export const generateInterviewQuestions = async (jobRole, difficulty) => {

    const prompt = `
        You are an experienced technical interviewer.

        Generate 10 interview questions for the following role:

        Job Role: ${jobRole}
        Difficulty: ${difficulty}

        Rules:
        - Generate relevant questions based on the job role.
        - Match the difficulty level.
        - Include a mixture of technical and practical questions.
        - Avoid duplicate questions.
        - Return valid JSON only.
        - Do not use Markdown code fences.

        Return the response in this exact JSON structure:

        {
            "questions": [
                "Question 1",
                "Question 2",
                "Question 3"
            ]
        }
    `;

    try {

        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Gemini API key is missing");
        }

        const ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY
        });

        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash-lite",
            contents: prompt
        });

        if (response.text) {
            console.log("Interview questions generated using Gemini");
            return response.text;
        }

        throw new Error("Gemini returned an empty response");

    } catch (geminiError) {

        console.log("Gemini failed:", geminiError.message);
        console.log("Switching to Groq...");

    }

    try {

        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is missing");
        }

        const groq = new Groq({
            apiKey: process.env.GROQ_API_KEY
        });

        const response = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7
        });

        const result = response.choices[0]?.message?.content;

        if (result) {
            console.log("Interview questions generated using Groq");
            return result;
        }

        throw new Error("Groq returned an empty response");

    } catch (groqError) {

        console.log("Groq failed:", groqError.message);

        throw new Error(
            "Both Gemini and Groq are currently unavailable."
        );
    }
};
