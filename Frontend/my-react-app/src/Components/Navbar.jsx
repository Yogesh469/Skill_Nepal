
import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import {TrendingUp, House, Map,FileSearch,MessageCircleMore,Crown,Sun,Moon, ArrowRight,Menu, X} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 px-2 py-1 backdrop-blur-xl sm:px-3 lg:px-4 ">
      <div className="mx-auto flex max-w-[2100px] items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-lg shadow-slate-200/50 lg:px-8 ">

        
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-700 text-white shadow-md shadow-blue-200">
            <TrendingUp size={30} strokeWidth={2.8} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              SkillNepal <span className="text-blue-600">AI</span>
            </h1>

            <p className="hidden text-xs font-medium tracking-wide text-slate-500 sm:block">
              Learn · Grow · Build Your Future
            </p>
          </div>
        </Link>

        
        <ul className="hidden items-center gap-5 xl:flex">

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-2 py-3 text-sm font-semibold transition-all duration-300 2xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <House size={20} />
                  Home
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-2 py-3 text-sm font-semibold transition-all duration-300 2xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Map size={20} />
                  AI Roadmap
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resume-analyzer"
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-2 py-3 text-sm font-semibold transition-all duration-300 2xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <FileSearch size={20} />
                  Resume Analyzer
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/interview-prep"
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-2 py-3 text-sm font-semibold transition-all duration-300 2xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <MessageCircleMore size={20} />
                  Interview Prep
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `group relative flex items-center gap-2 px-2 py-3 text-sm font-semibold transition-all duration-300 2xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-700 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Crown size={20} />
                  Pricing
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          </li>

        </ul>

        
        <div className="hidden shrink-0 items-center gap-3 xl:flex">

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition duration-300 hover:bg-blue-50 hover:text-blue-600"
          >
            {darkMode ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          <Link
            to="/login"
            className="rounded-full border border-blue-500 px-7 py-3 font-semibold text-blue-600 transition duration-300 hover:bg-blue-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-3 font-semibold text-white shadow-md shadow-blue-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-300"
          >
            Get Started
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

        
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition hover:bg-blue-100 xl:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="mx-auto mt-3 max-w-[1600px] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl xl:hidden">

          <ul className="flex flex-col gap-1">

            <li>
              <NavLink
                to="/"
                end
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                <House size={20} />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/roadmap"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                <Map size={20} />
                AI Roadmap
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/resume-analyzer"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                <FileSearch size={20} />
                Resume Analyzer
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/interview-prep"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                <MessageCircleMore size={20} />
                Interview Prep
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/pricing"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                <Crown size={20} />
                Pricing
              </NavLink>
            </li>

          </ul>

          <hr className="my-3 border-slate-100" />

          <div className="flex flex-col gap-2">

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
            >
              Get Started
              <ArrowRight size={19} />
            </Link>

            <button
              type="button"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-slate-700 transition hover:bg-slate-50"
            >
              {darkMode ? <Moon size={20} /> : <Sun size={20} />}
              {darkMode ? "Dark mode selected" : "Light mode selected"}
            </button>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
