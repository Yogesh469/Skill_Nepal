import React from "react";
import { Link } from "react-router";
import {ArrowRight,BookOpen,BriefcaseBusiness,CheckCircle2,Code2,GraduationCap,Rocket,Target,TrendingUp,Clock,Sparkles,ChevronRight,} from "lucide-react";

const Roadmap = () => {
return (
<div className="min-h-screen bg-slate-50">

 
  <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 px-6 py-20 text-white lg:px-10 lg:py-28">
    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
    <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>

    <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
          <Sparkles size={17} />
          AI-Powered Career Guidance
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Your Career Journey,
          <span className="mt-2 block text-blue-300">
            One Step at a Time.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
          Stop guessing what to learn next. Build a personalized learning
          roadmap, develop practical skills, and move closer to your dream
          career with SkillNepal AI.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/register"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Create My Roadmap
            <ArrowRight size={19} />
          </Link>

          <a
            href="#roadmap-steps"
            className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10"
          >
            Explore Roadmap
            <ChevronRight size={19} />
          </a>
        </div>
      </div>

      
      <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-200">
              YOUR LEARNING JOURNEY
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              Frontend Developer
            </h2>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-400/20 text-blue-200">
            <Code2 size={30} />
          </div>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-blue-100">HTML & CSS</span>
              <span className="font-semibold text-white">Completed</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15">
              <div className="h-2.5 w-full rounded-full bg-emerald-400"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-blue-100">JavaScript</span>
              <span className="font-semibold text-white">In Progress</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15">
              <div className="h-2.5 w-3/5 rounded-full bg-blue-300"></div>
            </div>
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-blue-100">React Development</span>
              <span className="font-semibold text-white">Upcoming</span>
            </div>
            <div className="h-2.5 rounded-full bg-white/15">
              <div className="h-2.5 w-1/4 rounded-full bg-indigo-300"></div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
            <Target size={23} />
          </div>
          <div>
            <p className="font-bold">Your next goal</p>
            <p className="mt-1 text-sm text-blue-100">
              Build your first React project.
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-blue-200">
          Example roadmap preview — progress is illustrative and is not
          saved to your account.
        </p>
      </div>
    </div>
  </section>

 
  <section className="border-b border-slate-200 bg-white px-6 py-10 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Target size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Clear Goals</h3>
          <p className="mt-1 text-sm text-slate-500">
            Know what to learn next
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <BookOpen size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Structured Learning</h3>
          <p className="mt-1 text-sm text-slate-500">
            Follow organized steps
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <BriefcaseBusiness size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Career Focused</h3>
          <p className="mt-1 text-sm text-slate-500">
            Learn job-ready skills
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
          <TrendingUp size={25} />
        </div>
        <div>
          <h3 className="font-bold text-slate-900">Track Progress</h3>
          <p className="mt-1 text-sm text-slate-500">
            See your improvement
          </p>
        </div>
      </div>

    </div>
  </section>

  
  <section id="roadmap-steps" className="scroll-mt-24 px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Your Learning Path
        </span>

        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          From Beginner to Job-Ready
        </h2>

        <p className="mt-5 text-base leading-8 text-slate-600">
          Every career starts with a first step. Follow these stages to
          build your knowledge, practice your skills, and prepare for real
          opportunities.
        </p>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">

        <div className="absolute bottom-12 left-7 top-12 hidden w-0.5 bg-blue-100 sm:block"></div>

        <div className="space-y-8">

          
          <div className="relative grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-7">
            <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold text-white shadow-lg shadow-blue-200">
              01
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  FOUNDATION
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                  <Clock size={15} />
                  2–4 weeks
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Learn the Fundamentals
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Start with the essential concepts and build a strong
                foundation before moving into advanced topics.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  HTML and CSS
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  JavaScript basics
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Git and GitHub
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Responsive design
                </li>
              </ul>
            </div>
          </div>

         
          <div className="relative grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-7">
            <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-xl font-extrabold text-white shadow-lg shadow-indigo-200">
              02
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-indigo-200 hover:shadow-lg sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700">
                  SPECIALIZATION
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                  <Clock size={15} />
                  4–6 weeks
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Develop Your Core Skills
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Choose a career direction and focus on the tools and
                technologies commonly used in that field.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  React and components
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Props and state
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Routing and APIs
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Forms and validation
                </li>
              </ul>
            </div>
          </div>

          
          <div className="relative grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-7">
            <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-600 text-xl font-extrabold text-white shadow-lg shadow-purple-200">
              03
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-purple-200 hover:shadow-lg sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                  PRACTICAL EXPERIENCE
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                  <Clock size={15} />
                  3–5 weeks
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Build Real Projects
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Turn your knowledge into practical experience. Build
                projects that demonstrate your ability to solve problems.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Personal portfolio
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  CRUD application
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Backend and database
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Deploy your projects
                </li>
              </ul>
            </div>
          </div>

          
          <div className="relative grid gap-5 sm:grid-cols-[64px_1fr] sm:gap-7">
            <div className="z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-xl font-extrabold text-white shadow-lg shadow-emerald-200">
              04
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-200 hover:shadow-lg sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                  CAREER PREPARATION
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-slate-500">
                  <Clock size={15} />
                  2–3 weeks
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                Prepare for Job Opportunities
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Present your skills professionally and practice explaining
                your projects before applying for internships or jobs.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Improve your resume
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Practice interviews
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Optimize LinkedIn
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
                  Apply for relevant roles
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>


  <section className="bg-white px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-7xl">

      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Choose Your Direction
        </span>

        <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Explore Career Paths
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Different goals require different learning paths. Start with
          the career that interests you most.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <Code2 size={28} />
          </div>
          <h3 className="mt-5 text-xl font-bold text-slate-900">
            Frontend Developer
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Create interactive, accessible, and responsive user
            interfaces for websites and applications.
          </p>
          <p className="mt-4 text-sm font-semibold text-blue-600">
            HTML · CSS · JavaScript · React
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <BriefcaseBusiness size={28} />
          </div>
          <h3 className="mt-5 text-xl font-bold text-slate-900">
            Backend Developer
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Build APIs, handle application logic, manage databases, and
            create secure server-side systems.
          </p>
          <p className="mt-4 text-sm font-semibold text-indigo-600">
            Node.js · Express · MongoDB
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
            <GraduationCap size={28} />
          </div>
          <h3 className="mt-5 text-xl font-bold text-slate-900">
            Full Stack Developer
          </h3>
          <p className="mt-3 leading-7 text-slate-600">
            Combine frontend and backend skills to build complete
            applications from interface to database.
          </p>
          <p className="mt-4 text-sm font-semibold text-purple-600">
            React · Node.js · APIs · Database
          </p>
        </div>

      </div>
    </div>
  </section>

  
  <section className="px-6 py-20 lg:px-10 lg:py-24">
    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
        <Rocket size={32} />
      </div>

      <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
        Ready to Build Your Future?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
        Tell SkillNepal AI about your interests and career goals.
        Your personalized roadmap feature can help you identify the next
        skills and projects to focus on.
      </p>

      <Link
        to="/register"
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
      >
        Get Started Today
        <ArrowRight size={19} />
      </Link>

    </div>
  </section>

</div>

);
};

export default Roadmap;