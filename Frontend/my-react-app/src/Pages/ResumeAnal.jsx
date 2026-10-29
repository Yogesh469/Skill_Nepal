import React, { useState } from "react";
import { Link } from "react-router";
import {ArrowRight,CheckCircle2,FileText,Upload,Sparkles,Target,TrendingUp,ShieldCheck,Zap,BrainCircuit,FileSearch,CircleCheck,CircleAlert,Lightbulb,X, Rocket,} from "lucide-react";

const ResumeAnal = () => {
const [selectedFile, setSelectedFile] = useState(null);
const [isDragging, setIsDragging] = useState(false);

const handleFileChange = (event) => {
const file = event.target.files?.[0];

if (file) {
  if (
    file.type !== "application/pdf" &&
    !file.name.toLowerCase().endsWith(".pdf")
  ) {
    alert("Please upload your resume in PDF format.");
    event.target.value = "";
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Please upload a PDF smaller than 5 MB.");
    event.target.value = "";
    return;
  }

  setSelectedFile(file);
}

};

const handleDrop = (event) => {
event.preventDefault();
setIsDragging(false);

const file = event.dataTransfer.files?.[0];

if (file) {
  if (
    file.type !== "application/pdf" &&
    !file.name.toLowerCase().endsWith(".pdf")
  ) {
    alert("Please upload your resume in PDF format.");
    return;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("Please upload a PDF smaller than 5 MB.");
    return;
  }

  setSelectedFile(file);
}

};

const features = [
{
icon: FileSearch,
title: "Resume Review",
description:
"Identify missing information, unclear sections, and opportunities to improve your resume.",
color: "bg-blue-50 text-blue-600",
},
{
icon: Target,
title: "Job Match Insights",
description:
"Compare your resume with a target job description to identify relevant skills and gaps.",
color: "bg-purple-50 text-purple-600",
},
{
icon: TrendingUp,
title: "Improvement Tips",
description:
"Discover practical ways to improve your experience descriptions, skills, and presentation.",
color: "bg-emerald-50 text-emerald-600",
},
];

const steps = [
{
number: "01",
title: "Upload Your Resume",
description:
"Choose your resume as a PDF file to get started with the review process.",
},
{
number: "02",
title: "Analyze Your Resume",
description:
"The analyzer will review your resume content and look for areas that need improvement.",
},
{
number: "03",
title: "Improve and Apply",
description:
"Use the feedback to strengthen your resume before applying for opportunities.",
},
];

return (
<div className="min-h-screen bg-slate-50">

  
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 px-6 py-20 text-white lg:px-10 lg:py-28">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>

    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
          <Sparkles size={17} />
          AI-Powered Resume Review
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Make Your Resume
          <span className="mt-2 block text-blue-300">
            Stand Out.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
          Take the next step in your career with smarter resume feedback.
          Identify improvement opportunities, highlight your skills, and
          prepare a stronger application for your dream job.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#upload-resume"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Analyze My Resume
            <ArrowRight size={19} />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
          >
            How It Works
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-100">
          <span className="flex items-center gap-2">
            <ShieldCheck size={17} />
            Private file handling
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 size={17} />
            PDF format
          </span>
        </div>
      </div>

      
      <div className="relative mx-auto w-full max-w-lg">
        <div className="absolute -inset-4 rounded-3xl bg-blue-400/20 blur-2xl"></div>

        <div className="relative rounded-3xl border border-white/20 bg-white p-6 text-slate-800 shadow-2xl sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FileText size={26} />
              </div>
              <div>
                <h2 className="font-bold text-slate-900">
                  Resume Overview
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Illustrative preview
                </p>
              </div>
            </div>

            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
              Sample
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center rounded-2xl bg-slate-50 p-6 sm:flex-row sm:gap-7">
            <div className="relative flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[10px] border-blue-100">
              <div className="absolute inset-0 rounded-full border-[10px] border-blue-600 border-r-transparent border-b-transparent -rotate-12"></div>
              <div className="text-center">
                <p className="text-3xl font-extrabold text-slate-900">
                  85
                </p>
                <p className="text-xs font-medium text-slate-500">
                  Sample score
                </p>
              </div>
            </div>

            <div className="mt-5 w-full flex-1 sm:mt-0">
              <h3 className="text-lg font-bold text-slate-900">
                Resume Strength
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                A sample of how resume feedback could be presented after
                an actual analysis.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                <TrendingUp size={16} />
                Improvement insights
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Skills relevance
                </span>
                <span className="font-semibold text-slate-900">Good</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-4/5 rounded-full bg-blue-600"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Experience details
                </span>
                <span className="font-semibold text-slate-900">
                  Improve
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-3/5 rounded-full bg-indigo-500"></div>
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-700">
                  Resume structure
                </span>
                <span className="font-semibold text-slate-900">Good</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-100">
                <div className="h-2.5 w-5/6 rounded-full bg-emerald-500"></div>
              </div>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Example values only. This preview is not generated from an
            uploaded resume.
          </p>
        </div>
      </div>

    </div>
  </section>

 
  <section className="border-b border-slate-200 bg-white px-6 py-10 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <BrainCircuit size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Smarter Feedback</h3>
          <p className="mt-1 text-sm text-slate-500">
            Understand your resume better
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <Target size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Job Relevance</h3>
          <p className="mt-1 text-sm text-slate-500">
            Focus on relevant skills
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Lightbulb size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Actionable Tips</h3>
          <p className="mt-1 text-sm text-slate-500">
            Know what to improve
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <Zap size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Career Ready</h3>
          <p className="mt-1 text-sm text-slate-500">
            Prepare for applications
          </p>
        </div>
      </div>

    </div>
  </section>

 
  <section id="upload-resume" className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-5xl">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Get Started
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Upload Your Resume
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Start with your existing resume. Upload a PDF to prepare it
          for analysis when the AI service is connected.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-10">
        <div
          onDragOver={(event) => {
            event.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`rounded-2xl border-2 border-dashed p-8 text-center transition sm:p-12 ${
            isDragging
              ? "border-blue-500 bg-blue-50"
              : "border-slate-300 bg-slate-50 hover:border-blue-400 hover:bg-blue-50/50"
          }`}
        >
          <input
            id="resume-upload"
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          <label
            htmlFor="resume-upload"
            className="mx-auto flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition hover:scale-105"
          >
            <Upload size={35} />
          </label>

          <h3 className="mt-6 text-xl font-bold text-slate-900">
            {selectedFile ? "Resume Selected!" : "Drop your resume here"}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            {selectedFile
              ? selectedFile.name
              : "Drag and drop your PDF file, or click below to browse."}
          </p>

          <label
            htmlFor="resume-upload"
            className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <FileText size={18} />
            {selectedFile ? "Choose Another File" : "Browse Files"}
          </label>

          <p className="mt-5 text-xs text-slate-500">
            PDF only · Maximum file size: 5 MB
          </p>
        </div>

        {selectedFile && (
          <div className="mt-5 flex flex-col gap-4 rounded-xl border border-blue-100 bg-blue-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600">
                <FileText size={23} />
              </div>

              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-800">
                  {selectedFile.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedFile(null)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:text-red-600"
            >
              <X size={16} />
              Remove
            </button>
          </div>
        )}

        <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
          <ShieldCheck size={20} className="mt-0.5 shrink-0" />
          <p>
            Uploading currently selects a file in your browser only. The
            actual AI analysis and secure server-side processing will be
            connected in a later step.
          </p>
        </div>

        <button
          type="button"
          disabled={!selectedFile}
          onClick={() =>
            alert(
              "Your file is selected. AI analysis will be available after the backend is connected."
            )
          }
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
        >
          <Sparkles size={20} />
          Analyze Resume
          <ArrowRight size={19} />
        </button>

      </div>
    </div>
  </section>

  
  <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Resume Intelligence
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Improve Every Part of Your Resume
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          A useful resume review should do more than provide a number.
          It should help you understand your strengths and next steps.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  
  <section id="how-it-works" className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Simple Process
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Three Steps to a Stronger Resume
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          A straightforward process to help you prepare for your next
          career opportunity.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <span className="text-5xl font-extrabold text-blue-100">
              {step.number}
            </span>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>


  <section className="px-6 pb-20 lg:px-10 lg:pb-24">
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
        <Rocket size={32} />
      </div>

      <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
        Your Next Opportunity Starts Here
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
        Build your skills, create a stronger application, and take the
        next step toward your career goals with SkillNepal AI.
      </p>

      <Link
        to="/roadmap"
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
      >
        Explore Career Roadmaps
        <ArrowRight size={19} />
      </Link>

    </div>
  </section>

</div>

);
};

export default ResumeAnal;