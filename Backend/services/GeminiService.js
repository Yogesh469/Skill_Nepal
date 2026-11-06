
import { GoogleGenAI } from "@google/genai";
import Groq from "groq-sdk";

// Generate personalized career roadmap
export const generateCareerRoadmap = async (userData) => {

    const {
        education,
        skills,
        targetCareer,
        experienceLevel,
        dailyStudyHours
    } = userData;

    const prompt = `
        You are an experienced career guidance AI.

        Generate a personalized career roadmap using these details:

        Education: ${education}
        Current Skills: ${skills}
        Target Career: ${targetCareer}
        Experience Level: ${experienceLevel}
        Daily Study Hours: ${dailyStudyHours}

        Create a practical roadmap that includes:

        1. Career overview
        2. Skills the user needs to learn
        3. Step-by-step learning phases
        4. Projects to build during learning
        5. Recommended tools and technologies
        6. Estimated learning duration
        7. Final career preparation tips

        Keep the roadmap beginner-friendly, realistic,
        structured, and easy to follow.


        RESPONSE FORMATTING AND PERSONALIZATION RULES:

1. Start with a clear and attractive title.
2. Use ## for main headings and ### for subheadings.
3. Use short paragraphs and bullet points.
4. Highlight important concepts using bold text.
5. Use Markdown tables only when necessary.
6. Every table row must be on a separate line.
7. Never use HTML tags such as <br>.
8. Separate major sections using ---.
9. Keep the roadmap beginner-friendly and practical.

IMPORTANT PERSONALIZATION RULES:

First identify the user's actual learning goal.

If the goal is a programming or technical career:
- Include technical skills, projects, tools and job preparation.

If the goal is language learning:
- Include grammar, vocabulary, listening, speaking, reading and writing.
- Include language proficiency milestones and exam preparation.
- Do not include unrelated programming projects or salary information.

Always adapt the roadmap to the user's actual target.

1. Never use career-related headings for language-learning goals.
2. Use "Learning Goal Overview" instead of "Career Overview".
3. Use "Practical Learning Activities" instead of "Projects to Build".
4. Use "Final Learning Tips" instead of "Career Preparation Tips".
5. Never generate empty bullet points or empty numbered list items.
6. Every heading must be followed by meaningful content.
7. Ensure all Markdown lists and tables are correctly formatted.
8. Do not repeat unnecessary horizontal separators.
    `;

    // 1. Try Gemini first
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
            console.log("Roadmap generated using Gemini");
            return response.text;
        }

        throw new Error("Gemini returned an empty response");

    } catch (geminiError) {

        console.log("Gemini failed:", geminiError.message);
        console.log("Switching to Groq...");

    }

    // 2. Use Groq as backup
    try {

        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is missing from .env");
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

        const roadmap = response.choices[0]?.message?.content;

        if (roadmap) {
            console.log("Roadmap generated using Groq");
            return roadmap;
        }

        throw new Error("Groq returned an empty response");

    } catch (groqError) {

        console.log("Groq failed:", groqError.message);

        throw new Error(
            "Both Gemini and Groq are currently unavailable. Please try again later."
        );
    }
};
