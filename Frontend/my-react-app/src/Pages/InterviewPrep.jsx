
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  MessageSquare,
  Play,
  Target,
  Trophy,
  Users,
  Zap,
  Sparkles,
  LoaderCircle,
} from "lucide-react";

const InterviewPrep = () => {

  const [jobRole, setJobRole] = useState("Frontend Developer");
  const [difficulty, setDifficulty] = useState("Beginner");

  const [generatedInterview, setGeneratedInterview] = useState(null);

  const [answers, setAnswers] = useState([]);
  const [evaluationResult, setEvaluationResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [error, setError] = useState("");

  // Generate AI interview questions
  const handleGenerateInterview = async () => {

    if (!jobRole.trim()) {
      setError("Please enter a job role");
      return;
    }

    try {

      setLoading(true);
      setError("");
      setGeneratedInterview(null);
      setEvaluationResult(null);
      setAnswers([]);

      const res = await axios.post(
        "http://localhost:9000/interviewapi/generate",
        {
          jobRole,
          difficulty,
        },
        {
          withCredentials: true,
        }
      );

      setGeneratedInterview(res.data.interview);

      setAnswers(
        res.data.interview.questions.map(() => "")
      );

    } catch (error) {

      console.log("Interview generation error:", error);

      setError(
        error.response?.data?.message ||
        "Failed to generate interview questions. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };

  // Handle answer changes
  const handleAnswerChange = (index, value) => {

    const updatedAnswers = [...answers];

    updatedAnswers[index] = value;

    setAnswers(updatedAnswers);

  };

  // Submit answers for AI evaluation
  const handleEvaluateInterview = async () => {

    const emptyAnswer = answers.some((answer) => !answer.trim());

    if (emptyAnswer) {
      setError("Please answer all interview questions");
      return;
    }

    try {

      setEvaluating(true);
      setError("");

      const submittedAnswers = answers.map((answer, index) => ({
        questionIndex: index,
        answer: answer.trim(),
      }));

      const res = await axios.post(
        "http://localhost:9000/interviewapi/evaluate",
        {
          interviewId: generatedInterview._id,
          answers: submittedAnswers,
        },
        {
          withCredentials: true,
        }
      );

      setEvaluationResult(res.data.interview);

    } catch (error) {

      console.log("Interview evaluation error:", error);

      setError(
        error.response?.data?.message ||
        "Failed to evaluate your interview. Please try again."
      );

    } finally {

      setEvaluating(false);

    }
  };

  return (

    <div className="min-h-screen bg-white text-slate-900">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:py-28">

          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <BrainCircuit size={17} />
              AI-Powered Interview Preparation
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">

              Your Next Interview.

              <span className="mt-2 block text-blue-600">
                Your Best Performance.
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Generate personalized interview questions, practice your
              answers, and strengthen your communication and technical
              skills before the real interview.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#ai-interview"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Start Practicing
                <ArrowRight size={18} />
              </a>

              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-600"
              >
                Explore Roadmaps
              </Link>

            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-500" />
                Personalized questions
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-500" />
                Practice at your pace
              </span>

            </div>

          </div>

          {/* HERO PREVIEW */}

          <div className="relative mx-auto w-full max-w-lg">

            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/60 to-indigo-200/60 blur-2xl" />

            <div className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    AI PRACTICE SESSION
                  </p>

                  <h2 className="mt-1 text-xl font-bold">
                    Frontend Developer
                  </h2>
                </div>

                <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
                  <Code2 size={28} />
                </div>

              </div>

              <div className="mt-7 rounded-2xl bg-slate-50 p-5">

                <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <MessageSquare size={17} />
                  AI Interview Question
                </div>

                <p className="mt-3 text-lg font-semibold leading-7 text-slate-800">
                  How do you manage state in a React application?
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Prepare your answer and demonstrate your practical knowledge.
                </p>

              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-blue-50 p-3 text-center">
                  <Target className="mx-auto text-blue-600" size={22} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Technical
                  </p>
                </div>

                <div className="rounded-xl bg-indigo-50 p-3 text-center">
                  <Users className="mx-auto text-indigo-600" size={22} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    HR Round
                  </p>
                </div>

                <div className="rounded-xl bg-violet-50 p-3 text-center">
                  <Zap className="mx-auto text-violet-600" size={22} />
                  <p className="mt-2 text-xs font-semibold text-slate-700">
                    Quick Prep
                  </p>
                </div>

              </div>

              <p className="mt-5 text-center text-xs text-slate-400">
                AI-powered interview practice
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="border-y border-slate-100 bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 md:px-10">

          {[
            {
              icon: BrainCircuit,
              title: "Prepare Smarter",
              description: "Generate questions relevant to your career.",
            },
            {
              icon: MessageSquare,
              title: "Build Confidence",
              description: "Practice structuring clear answers.",
            },
            {
              icon: Trophy,
              title: "Improve Gradually",
              description: "Learn through AI-powered feedback.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div key={item.title} className="flex items-center gap-4">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>

              </div>

            );

          })}

        </div>

      </section>

      {/* AI INTERVIEW GENERATOR */}

      <section
        id="ai-interview"
        className="scroll-mt-24 bg-slate-50 py-20"
      >

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              AI Interview Generator
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Generate Your Own Interview
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Choose your desired job role and difficulty level.
              Our AI will generate personalized interview questions.
            </p>

          </div>

          <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">

            <div className="grid gap-6 sm:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Job Role
                </label>

                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  placeholder="Example: Frontend Developer"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Difficulty Level
                </label>

                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >

                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>

                </select>

              </div>

            </div>

            {error && !generatedInterview && (

              <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
                {error}
              </div>

            )}

            <button
              onClick={handleGenerateInterview}
              disabled={loading || evaluating}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >

              {loading ? (
                <>
                  <LoaderCircle size={20} className="animate-spin" />
                  Generating Questions...
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Generate AI Interview
                  <ArrowRight size={18} />
                </>
              )}

            </button>

          </div>

          {/* GENERATED QUESTIONS */}

          {generatedInterview && (

            <div className="mx-auto mt-12 max-w-4xl">

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">

                <div>

                  <span className="text-sm font-bold uppercase tracking-widest text-green-600">
                    Interview Generated
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-slate-900">
                    {generatedInterview.jobRole} Interview
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Difficulty: {generatedInterview.difficulty}
                  </p>

                </div>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  {generatedInterview.questions.length} Questions
                </span>

              </div>

              {/* QUESTIONS AND ANSWER INPUTS */}

              <div className="space-y-5">

                {generatedInterview.questions.map((item, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >

                    <div className="flex items-start gap-4">

                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-600">
                        {index + 1}
                      </span>

                      <h4 className="font-semibold leading-7 text-slate-800">
                        {item}
                      </h4>

                    </div>

                    <div className="mt-5">

                      <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Your Answer
                      </label>

                      <textarea
                        rows="4"
                        value={answers[index] || ""}
                        onChange={(e) => handleAnswerChange(index, e.target.value)}
                        disabled={!!evaluationResult}
                        placeholder="Write your answer here..."
                        className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50"
                      />

                    </div>

                  </div>

                ))}

              </div>

              {/* SUBMIT ANSWERS */}

              {!evaluationResult && (

                <button
                  onClick={handleEvaluateInterview}
                  disabled={evaluating}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {evaluating ? (
                    <>
                      <LoaderCircle size={20} className="animate-spin" />
                      Evaluating Your Answers...
                    </>
                  ) : (
                    <>
                      <BrainCircuit size={20} />
                      Submit Answers for Evaluation
                      <ArrowRight size={18} />
                    </>
                  )}

                </button>

              )}

              {/* EVALUATION ERROR */}

              {error && (

                <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-600">
                  {error}
                </div>

              )}

              {/* EVALUATION RESULTS */}

              {evaluationResult && (

                <div className="mt-12 space-y-6">

                  {/* OVERALL SCORE */}

                  <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 text-center">

                    <Trophy className="mx-auto text-blue-600" size={40} />

                    <p className="mt-4 text-sm font-bold uppercase tracking-widest text-blue-600">
                      Interview Completed
                    </p>

                    <h3 className="mt-3 text-5xl font-extrabold text-slate-900">
                      {evaluationResult.totalScore}
                      <span className="text-2xl text-slate-400">/100</span>
                    </h3>

                    <p className="mt-3 font-semibold text-slate-700">
                      Your Overall Score
                    </p>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                      {evaluationResult.overallFeedback}
                    </p>

                  </div>

                  {/* STRENGTHS AND IMPROVEMENTS */}

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div className="rounded-2xl border border-green-100 bg-green-50 p-6">

                      <h4 className="font-bold text-green-800">
                        Your Strengths
                      </h4>

                      <ul className="mt-4 space-y-3">

                        {evaluationResult.strengths.map((item, index) => (

                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm leading-6 text-green-700"
                          >
                            <CheckCircle2 size={17} className="mt-1 shrink-0" />
                            {item}
                          </li>

                        ))}

                      </ul>

                    </div>

                    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">

                      <h4 className="font-bold text-orange-800">
                        Areas to Improve
                      </h4>

                      <ul className="mt-4 space-y-3">

                        {evaluationResult.areasToImprove.map((item, index) => (

                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm leading-6 text-orange-700"
                          >
                            <Target size={17} className="mt-1 shrink-0" />
                            {item}
                          </li>

                        ))}

                      </ul>

                    </div>

                  </div>

                  {/* INDIVIDUAL ANSWER FEEDBACK */}

                  <div>

                    <h3 className="mb-5 text-2xl font-bold text-slate-900">
                      Question-wise Evaluation
                    </h3>

                    <div className="space-y-4">

                      {evaluationResult.answers.map((item, index) => (

                        <div
                          key={index}
                          className="rounded-2xl border border-slate-200 bg-white p-6"
                        >

                          <div className="flex flex-wrap items-center justify-between gap-3">

                            <h4 className="font-bold text-slate-800">
                              Question {index + 1}
                            </h4>

                            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                              {item.score}/10
                            </span>

                          </div>

                          <p className="mt-3 text-sm leading-7 text-slate-600">
                            {item.question}
                          </p>

                          <div className="mt-4 rounded-xl bg-slate-50 p-4">

                            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                              AI Feedback
                            </p>

                            <p className="mt-2 text-sm leading-7 text-slate-700">
                              {item.feedback}
                            </p>

                          </div>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              )}

              {/* INTERVIEW STATUS */}

              <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <div className="flex items-center gap-2 font-semibold text-blue-800">
                  <BrainCircuit size={20} />
                  {evaluationResult ? "Your evaluation is saved!" : "Your interview is saved!"}
                </div>

                <p className="mt-2 text-sm leading-6 text-blue-700">
                  {evaluationResult
                    ? "Your answers and AI evaluation have been saved to your account."
                    : "Answer all the questions and submit them to receive your AI evaluation."}
                </p>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* PREPARATION PLAN */}

      <section className="bg-white py-20">

        <div className="mx-auto max-w-7xl px-6 md:px-10">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Your Preparation Plan
            </span>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Three Steps to Better Interviews
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              A simple routine to help you prepare without feeling overwhelmed.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                icon: Target,
                title: "Choose Your Role",
                description:
                  "Focus on the role you want, such as frontend developer, backend developer, or software engineer.",
              },
              {
                number: "02",
                icon: MessageSquare,
                title: "Practice Your Answers",
                description:
                  "Explain concepts in your own words and use examples from your projects.",
              },
              {
                number: "03",
                icon: Trophy,
                title: "Review and Improve",
                description:
                  "Receive feedback, identify weak areas, and practice again.",
              },
            ].map((step) => {

              const Icon = step.icon;

              return (

                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-3xl font-extrabold text-blue-100">
                      {step.number}
                    </span>

                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                      <Icon size={25} />
                    </div>

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </section>

      {/* CTA SECTION */}

      <section className="px-6 pb-20 md:px-10">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 px-7 py-12 text-white sm:px-12 sm:py-16">

          <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold">
                <BrainCircuit size={16} />
                Keep Moving Forward
              </div>

              <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                Build Skills. Practice. Get Hired.
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                Strengthen your career preparation with a learning roadmap and
                a resume that highlights your skills.
              </p>

            </div>

            <div className="flex flex-wrap gap-3">

              <Link
                to="/resume-analyzer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
              >
                Analyze Resume
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/roadmap"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                View Roadmap
                <Play size={17} />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
};

export default InterviewPrep;
