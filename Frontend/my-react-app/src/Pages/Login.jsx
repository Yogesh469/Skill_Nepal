import React, { useState } from "react";
import { Link } from "react-router";
import {BrainCircuit,Mail,LockKeyhole,Eye,EyeOff,ArrowRight,Sparkles,ShieldCheck,} from "lucide-react";

function Login() {
const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();


console.log("Login form submitted");

};

return (
<div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:py-16">
<div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl shadow-blue-100/60 lg:grid-cols-2">

<div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 text-white lg:flex xl:p-14">
<div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
<div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-indigo-400/20 blur-2xl" />

      <Link to="/" className="relative z-10 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
          <BrainCircuit size={28} />
        </div>
        <span className="text-2xl font-extrabold tracking-tight">
          SkillNepal AI
        </span>
      </Link>

      <div className="relative z-10 my-12">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium">
          <Sparkles size={16} />
          Your career journey starts here
        </div>

        <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
          Unlock your potential.
          <span className="mt-2 block text-blue-200">
            Build your future.
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base leading-8 text-blue-100">
          Improve your skills, prepare for interviews, analyze your resume,
          and take the next step toward your dream career.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Personalized career roadmaps",
            "AI-powered resume assistance",
            "Interview preparation resources",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <ShieldCheck size={15} />
              </div>
              <span className="text-sm text-blue-50">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="relative z-10 text-sm text-blue-200">
        Learn smarter. Prepare better. Grow faster.
      </p>
    </div>

    
    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-16">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BrainCircuit size={23} />
          </div>
          <span className="text-xl font-extrabold text-slate-900">
            SkillNepal <span className="text-blue-600">AI</span>
          </span>
        </Link>

        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
            Welcome back
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Login to your account
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Enter your details to continue your career journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

         
          <div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-slate-700"
              >
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative">
              <LockKeyhole
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
              >
                {showPassword ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>
          </div>

          
          <div className="flex items-center gap-2">
            <input
              id="remember"
              name="remember"
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 accent-blue-600"
            />
            <label
              htmlFor="remember"
              className="text-sm text-slate-600"
            >
              Remember me
            </label>
          </div>

          
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Login
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </form>

        <div className="my-7 flex items-center gap-4">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="text-xs font-medium text-slate-400">
            NEW TO SKILLNEPAL AI?
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <p className="text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-blue-600 transition hover:text-blue-800"
          >
            Create an account
          </Link>
        </p>

        <p className="mt-8 text-center text-xs leading-5 text-slate-400">
          By continuing, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  </div>
</div>

);
}

export default Login;