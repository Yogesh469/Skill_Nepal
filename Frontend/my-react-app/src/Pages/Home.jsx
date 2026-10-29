
import React from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Play,
  Sparkles,
  Map,
  FileSearch,
  MessageCircleMore,
  BrainCircuit,
  Users,
  Star,
  BookOpen,
  TrendingUp,
  UserRoundPlus,
  Target,
  Rocket,
  Quote,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const Home = () => {
  return (
    <main className="overflow-hidden bg-white text-slate-900">

     
      <section className="relative bg-gradient-to-br from-white via-blue-50/70 to-indigo-50">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24 lg:px-10">

          
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles size={17} />
              AI-Powered Career Growth Platform
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your Future Is
              <br />
              in{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Your Hands.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Learn smarter, build real-world skills, and prepare for your
              dream career with personalized AI career roadmaps, resume
              feedback, and interview practice — all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Get Started Free
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                <Play size={18} className="fill-blue-100 text-blue-600" />
                How It Works
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-teal-500" />
                Personalized Learning
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-teal-500" />
                Career-Focused AI
              </span>
            </div>
          </div>

          
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-8 rounded-full bg-blue-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-5 shadow-2xl shadow-blue-200/50 sm:p-8">

              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-200/40 blur-2xl" />

              <div className="relative flex items-center justify-between rounded-2xl border border-white bg-white/90 p-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <Target size={25} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Your career goal</p>
                    <p className="font-bold text-slate-800">
                      Frontend Developer
                    </p>
                  </div>
                </div>
                <Sparkles className="text-blue-500" size={22} />
              </div>

              <div className="relative my-6 flex items-center justify-center">
                <div className="flex h-44 w-44 items-center justify-center rounded-full bg-gradient-to-br from-blue-200 to-indigo-300 sm:h-52 sm:w-52">
                  <GraduationCap
                    size={105}
                    strokeWidth={1.2}
                    className="text-blue-700"
                  />
                </div>

                <div className="absolute -left-1 bottom-3 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg">
                  <TrendingUp size={30} className="text-teal-500" />
                  <p className="mt-1 text-xs font-bold">Keep growing!</p>
                </div>

                <div className="absolute -right-1 top-3 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg">
                  <BrainCircuit size={28} className="text-indigo-600" />
                  <p className="mt-1 text-xs font-bold">AI Powered</p>
                </div>
              </div>

              <div className="relative rounded-2xl border border-white bg-white/90 p-4 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <p className="font-bold">Your learning journey</p>
                  <span className="text-sm font-semibold text-blue-600">
                    Your pace
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: "Learn new skills", width: "w-full", color: "bg-blue-500" },
                    { name: "Build projects", width: "w-3/4", color: "bg-indigo-500" },
                    { name: "Prepare for interviews", width: "w-1/2", color: "bg-teal-500" },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="mb-1.5 flex items-center justify-between gap-2 text-xs font-medium text-slate-600">
                        <span>{item.name}</span>
                        <CheckCircle2 size={15} className="text-teal-500" />
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full rounded-full ${item.color} ${item.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      
      <section id="features" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-600">
              Explore Our Features
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything You Need to
              <span className="text-blue-600"> Grow</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Practical AI tools to help you learn, improve your profile,
              and move closer to your career goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="group rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                <Map size={28} />
              </div>
              <h3 className="text-lg font-bold">AI Career Roadmap</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get a personalized learning path based on your goals,
                current skills, and experience.
              </p>
              <Link to="/roadmap" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                Explore Roadmap <ArrowRight size={17} />
              </Link>
            </div>

            <div className="group rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition group-hover:bg-teal-600 group-hover:text-white">
                <FileSearch size={28} />
              </div>
              <h3 className="text-lg font-bold">Resume Analyzer</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Get AI-assisted feedback on your resume, skills, and
                opportunities for improvement.
              </p>
              <Link to="/resume-analyzer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-600">
                Analyze Resume <ArrowRight size={17} />
              </Link>
            </div>

            <div className="group rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                <MessageCircleMore size={28} />
              </div>
              <h3 className="text-lg font-bold">Interview Practice</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Practice role-specific interview questions and improve
                your confidence before the real interview.
              </p>
              <Link to="/interview-prep" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-violet-600">
                Start Practicing <ArrowRight size={17} />
              </Link>
            </div>

            <div className="group rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-white p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-lg font-bold">Quizzes & Progress</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Test your knowledge, measure your progress, and identify
                skills you can improve.
              </p>
              <Link to="/register" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-600">
                Start Learning <ArrowRight size={17} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      
      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 p-8 sm:grid-cols-4 sm:p-10">

          <div className="text-center">
            <Users className="mx-auto mb-3 text-blue-600" size={30} />
            <p className="text-2xl font-extrabold">Your Goals</p>
            <p className="mt-1 text-sm text-slate-500">Personalized learning</p>
          </div>

          <div className="text-center">
            <Star className="mx-auto mb-3 text-blue-600" size={30} />
            <p className="text-2xl font-extrabold">Your Skills</p>
            <p className="mt-1 text-sm text-slate-500">Focused improvement</p>
          </div>

          <div className="text-center">
            <BookOpen className="mx-auto mb-3 text-blue-600" size={30} />
            <p className="text-2xl font-extrabold">Your Journey</p>
            <p className="mt-1 text-sm text-slate-500">Structured roadmaps</p>
          </div>

          <div className="text-center">
            <TrendingUp className="mx-auto mb-3 text-blue-600" size={30} />
            <p className="text-2xl font-extrabold">Your Growth</p>
            <p className="mt-1 text-sm text-slate-500">Track your progress</p>
          </div>

        </div>
      </section>

      
      <section id="how-it-works" className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">

          <div className="mb-14 text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-700">
              Simple Steps
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Your Journey Starts Here
            </h2>
            <p className="mt-4 text-slate-600">
              Four simple steps to start working toward your career goals.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-lg shadow-blue-100">
                <UserRoundPlus size={34} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">1</span>
              </div>
              <h3 className="font-bold">Create Your Account</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Set up your profile and tell us a little about yourself.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-lg shadow-blue-100">
                <Target size={34} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">2</span>
              </div>
              <h3 className="font-bold">Choose Your Goals</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Select a career path and the skills you want to develop.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-lg shadow-blue-100">
                <BrainCircuit size={34} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">3</span>
              </div>
              <h3 className="font-bold">Get AI Guidance</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Explore roadmaps, resume feedback, and interview practice.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-blue-600 shadow-lg shadow-blue-100">
                <Rocket size={34} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">4</span>
              </div>
              <h3 className="font-bold">Grow Your Career</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Keep learning, build projects, and prepare for opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

     
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Quote size={30} />
          </div>

          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Your Potential Has No Limits
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Every expert starts somewhere. Build your skills one step at a
            time, learn from your mistakes, and turn your career goals into
            a practical plan.
          </p>

          <div className="mt-7 flex justify-center gap-2">
            <span className="h-2 w-8 rounded-full bg-blue-600" />
            <span className="h-2 w-2 rounded-full bg-blue-200" />
            <span className="h-2 w-2 rounded-full bg-blue-200" />
          </div>
        </div>
      </section>

      
      <section className="px-6 pb-20 lg:px-10">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-12 text-center shadow-2xl shadow-blue-200 sm:px-12 sm:py-16">

          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full border-[40px] border-white/10" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
              <Sparkles size={17} />
              Your Next Chapter Starts Now
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Ready to Build Your Future?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
              Start building your skills, discover your career path, and take
              the next step toward your dream job with SkillNepal AI.
            </p>

            <Link
              to="/register"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started for Free
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;
