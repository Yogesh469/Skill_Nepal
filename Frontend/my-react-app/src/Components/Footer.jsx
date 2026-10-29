import React from "react";
import { Link, NavLink } from "react-router";
import { TrendingUp } from "lucide-react";

const Footer = () => {
return (
<footer className="bg-slate-950 text-slate-300">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">

    <div>
      <Link to="/" className="inline-flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <TrendingUp size={26} />
        </div>

        <span className="text-xl font-extrabold text-white">
          SkillNepal <span className="text-blue-400">AI</span>
        </span>
      </Link>

      <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
        Learn smarter. Grow stronger. Build a future you're proud of.
      </p>
    </div>

    <div>
      <h3 className="font-bold text-white">Explore</h3>

      <ul className="mt-5 space-y-3 text-sm">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/roadmap"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            AI Roadmap
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/resume-analyzer"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Resume Analyzer
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/interview-prep"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Interview Practice
          </NavLink>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-white">Get Started</h3>

      <ul className="mt-5 space-y-3 text-sm">
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Create Account
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Login
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `transition ${
                isActive
                  ? "font-semibold text-blue-400"
                  : "hover:text-blue-400"
              }`
            }
          >
            Pricing
          </NavLink>
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-white">Our Mission</h3>

      <p className="mt-5 text-sm leading-7 text-slate-400">
        Making career guidance and practical learning tools more
        accessible to students and job seekers in Nepal.
      </p>
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-10">
      <p>
        © {new Date().getFullYear()} SkillNepal AI. All rights reserved.
      </p>

      <p>Built to help you learn, grow, and move forward.</p>
    </div>
  </div>
</footer>

);
};

export default Footer;