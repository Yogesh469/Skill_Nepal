import React, { useState } from "react";
import { Link } from "react-router";
import {ArrowRight,BrainCircuit,BriefcaseBusiness,CheckCircle2,ChevronRight,Code2,MessageSquare,Play,RotateCcw,Target,Trophy,Users,Zap,} from "lucide-react";

const InterviewPrep = () => {
const [activeCategory, setActiveCategory] = useState("Technical");
const [currentQuestion, setCurrentQuestion] = useState(0);
const [showAnswer, setShowAnswer] = useState(false);

const categories = [
{ name: "Technical", icon: Code2, count: 12 },
{ name: "HR Interview", icon: Users, count: 10 },
{ name: "Behavioral", icon: MessageSquare, count: 8 },
{ name: "Job Specific", icon: BriefcaseBusiness, count: 10 },
];

const questions = {
Technical: [
{
question: "What is the difference between let, const, and var in JavaScript?",
answer:
"var is function-scoped and can be redeclared. let is block-scoped and can be reassigned but not redeclared in the same scope. const is block-scoped and cannot be reassigned after initialization.",
tip: "Explain scope, reassignment, and redeclaration with a small example.",
},
{
question: "What is React, and why is it used?",
answer:
"React is a JavaScript library for building user interfaces. It uses reusable components and a declarative approach to update the UI efficiently.",
tip: "Mention components, reusable UI, and state-driven rendering.",
},
{
question: "What is the difference between props and state in React?",
answer:
"Props are passed from a parent component to a child component. State is data managed inside a component that can change over time and trigger a re-render.",
tip: "Use a simple parent-child component example.",
},
],
"HR Interview": [
{
question: "Tell me about yourself.",
answer:
"Start with your education, briefly explain your technical skills and projects, and finish by describing the role you want and how you can contribute.",
tip: "Keep your answer focused on your career and aim for 60–90 seconds.",
},
{
question: "Why should we hire you?",
answer:
"Connect your relevant skills, willingness to learn, and project experience to the company's needs. Give one specific example to support your answer.",
tip: "Show what you can contribute instead of only saying you work hard.",
},
{
question: "Where do you see yourself in five years?",
answer:
"Describe a realistic goal involving stronger technical skills, meaningful project contributions, and increasing responsibility in your field.",
tip: "Show ambition while keeping your answer relevant to the position.",
},
],
Behavioral: [
{
question: "Tell me about a challenge you faced in a project.",
answer:
"Use the STAR method: describe the Situation, your Task, the Action you took, and the Result. Choose a real challenge and explain what you learned.",
tip: "Focus on your own actions and the result, not only the problem.",
},
{
question: "How do you handle feedback?",
answer:
"Explain how you listen carefully, ask questions when necessary, apply useful feedback, and review the result to improve your work.",
tip: "Give a genuine example of how feedback helped you improve.",
},
{
question: "How do you prioritize multiple tasks?",
answer:
"Explain how you identify deadlines and importance, break work into smaller tasks, and communicate early if priorities conflict.",
tip: "Mention a real situation where you organized your work.",
},
],
"Job Specific": [
{
question: "How would you build a responsive website using React?",
answer:
"I would break the UI into reusable components, use responsive CSS or Tailwind breakpoints, manage data with props and state, and test the layout on different screen sizes.",
tip: "Explain your approach in steps and mention accessibility.",
},
{
question: "How do you connect a React frontend to a REST API?",
answer:
"I would send HTTP requests using fetch or Axios, manage loading and error states, and display the returned data in the UI. Protected operations also require appropriate authentication and authorization.",
tip: "Mention GET, POST, PUT or PATCH, and DELETE where relevant.",
},
{
question: "How do you debug a frontend issue?",
answer:
"I reproduce the issue, read the browser console and network errors, inspect the relevant component and data, make a focused fix, and retest the affected functionality.",
tip: "Use a real bug you solved in one of your projects.",
},
],
};

const selectedQuestions = questions[activeCategory];
const question = selectedQuestions[currentQuestion];

const changeCategory = (category) => {
setActiveCategory(category);
setCurrentQuestion(0);
setShowAnswer(false);
};
  
const nextQuestion = () => {
setCurrentQuestion((currentQuestion + 1) % selectedQuestions.length);
setShowAnswer(false);
};

const resetPractice = () => {
setCurrentQuestion(0);
setShowAnswer(false);
};

return (
<div className="min-h-screen bg-white text-slate-900">

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
          Practice interview questions, prepare confident answers, and
          strengthen your communication and technical skills before the
          real interview.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#practice"
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
            Beginner friendly
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={17} className="text-green-500" />
            Practice at your pace
          </span>
        </div>
      </div>

      
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-200/60 to-indigo-200/60 blur-2xl" />

        <div className="relative rounded-3xl border border-blue-100 bg-white p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                PRACTICE SESSION
              </p>
              <h2 className="mt-1 text-xl font-bold">Frontend Developer</h2>
            </div>
            <div className="rounded-2xl bg-blue-50 p-3 text-blue-600">
              <Code2 size={28} />
            </div>
          </div>

          <div className="mt-7 rounded-2xl bg-slate-50 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-blue-600">
              <MessageSquare size={17} />
              Sample Interview Question
            </div>
            <p className="mt-3 text-lg font-semibold leading-7 text-slate-800">
              How do you manage state in a React application?
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Explain your approach with a practical example from a project.
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
            Sample preview — your practice starts below.
          </p>
        </div>
      </div>
    </div>
  </section>

 
  <section className="border-y border-slate-100 bg-white">
    <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-3 md:px-10">
      {[
        {
          icon: BrainCircuit,
          title: "Prepare Smarter",
          description: "Review questions relevant to your career.",
        },
        {
          icon: MessageSquare,
          title: "Build Confidence",
          description: "Practice structuring clear answers.",
        },
        {
          icon: Trophy,
          title: "Improve Gradually",
          description: "Learn from tips and repeated practice.",
        },
      ].map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Icon size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </section>

 
  <section id="practice" className="scroll-mt-24 bg-slate-50 py-20">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Practice Zone
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Get Ready for the Real Interview
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Choose a category, answer the question yourself, then reveal a
          sample answer and a practical tip.
        </p>
      </div>

      
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.name;

          return (
            <button
              key={category.name}
              onClick={() => changeCategory(category.name)}
              className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 ${
                isActive
                  ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "border-slate-200 bg-white text-slate-800 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={26}
                  className={isActive ? "text-white" : "text-blue-600"}
                />
                <ChevronRight
                  size={19}
                  className={isActive ? "text-blue-100" : "text-slate-400"}
                />
              </div>
              <h3 className="mt-5 font-bold">{category.name}</h3>
              <p
                className={`mt-1 text-sm ${
                  isActive ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {category.count} practice questions
              </p>
            </button>
          );
        })}
      </div>

      
      <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            {activeCategory}
          </span>
          <span className="text-sm font-medium text-slate-500">
            Question {currentQuestion + 1} of {selectedQuestions.length}
          </span>
        </div>

        <div className="mt-7">
          <h3 className="text-2xl font-bold leading-snug text-slate-900">
            {question.question}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Take a moment to think through your response before revealing
            the sample answer.
          </p>
        </div>

        {showAnswer ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
              <div className="flex items-center gap-2 font-bold text-green-800">
                <CheckCircle2 size={20} />
                Sample Answer
              </div>
              <p className="mt-3 leading-7 text-slate-700">
                {question.answer}
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <div className="flex items-center gap-2 font-bold text-amber-800">
                <Target size={19} />
                Interview Tip
              </div>
              <p className="mt-2 leading-6 text-slate-700">
                {question.tip}
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-blue-200 bg-blue-50/60 p-6 text-center">
            <BrainCircuit
              size={30}
              className="mx-auto text-blue-600"
            />
            <p className="mt-3 font-semibold text-slate-800">
              Ready to test yourself?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Think of your answer before revealing the sample response.
            </p>
          </div>
        )}

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={() => setShowAnswer(!showAnswer)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-700 sm:flex-none"
          >
            {showAnswer ? "Hide Answer" : "Reveal Sample Answer"}
            <ArrowRight size={18} />
          </button>

          <button
            onClick={nextQuestion}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3.5 font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
          >
            Next Question
            <ChevronRight size={18} />
          </button>

          <button
            onClick={resetPractice}
            aria-label="Reset practice questions"
            title="Reset questions"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3.5 text-slate-500 transition hover:bg-slate-50 hover:text-blue-600"
          >
            <RotateCcw size={18} />
          </button>
        </div>
      </div>
    </div>
  </section>

  
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
              "Identify weak areas, revise important concepts, and practice again.",
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
              <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  
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