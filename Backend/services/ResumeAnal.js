
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";

export const analyzeResume = async (resumeText) => {

    const prompt = `
        You are an experienced professional resume reviewer.

        Analyze the following resume:

        ${resumeText}

        Evaluate the resume and return the result in this exact JSON structure:

        {
            "score": 75,
            "summary": "A short professional summary",
            "strengths": ["Strength 1", "Strength 2"],
            "weaknesses": ["Weakness 1", "Weakness 2"],
            "suggestions": ["Suggestion 1", "Suggestion 2"]
        }

        Rules:
        - Score must be between 0 and 100.
        - Give honest and constructive feedback.
        - Identify missing skills where relevant.
        - Return valid JSON only.
        - Do not use Markdown code fences.
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
            console.log("Resume analyzed using Gemini");
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
            console.log("Resume analyzed using Groq");
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
