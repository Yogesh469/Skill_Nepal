import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import {
  BrainCircuit,
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const validationSchema = Yup.object({

    name: Yup.string()
      .min(2, "Name must contain at least 2 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords do not match")
      .required("Confirm password is required"),

    terms: Yup.boolean()
      .oneOf([true], "You must accept the Terms and Conditions"),

  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:py-14">

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
              Start your career journey
            </div>

            <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">

              Your future begins

              <span className="mt-2 block text-blue-200">
                with one step.
              </span>

            </h1>

            <p className="mt-6 max-w-md text-base leading-8 text-blue-100">
              Create your account and get ready to improve your skills, prepare
              for interviews, and discover new career opportunities.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Build your personalized career roadmap",
                "Improve your resume with AI assistance",
                "Practice interviews with confidence",
              ].map((feature) => (

                <div key={feature} className="flex items-center gap-3">

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <ShieldCheck size={15} />
                  </div>

                  <span className="text-sm text-blue-50">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

          <p className="relative z-10 text-sm text-blue-200">
            Learn smarter. Prepare better. Grow faster.
          </p>

        </div>

        <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12 xl:p-14">

          <div className="w-full max-w-md">

            <Link to="/" className="mb-7 flex items-center gap-2 lg:hidden">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <BrainCircuit size={23} />
              </div>

              <span className="text-xl font-extrabold text-slate-900">
                SkillNepal <span className="text-blue-600">AI</span>
              </span>

            </Link>

            <div className="mb-7">

              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-blue-600">
                Join our community
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Enter your details to get started with SkillNepal AI.
              </p>

            </div>

            <Formik

              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                terms: false,
              }}

              validationSchema={validationSchema}

              onSubmit={async (values, { setSubmitting, setStatus }) => {

                try {

                  const res = await axios.post(
                    "http://localhost:9000/Authapi/Reguser",
                    {
                      name: values.name.trim(),
                      email: values.email.trim().toLowerCase(),
                      password: values.password,
                    }
                  );

                  setStatus({
                    success: res.data.message,
                  });

                  setTimeout(() => {
                    navigate("/login");
                  }, 1500);

                } catch (error) {

                  console.error("Registration error:", error);

                  setStatus({
                    error:
                      error.response?.data?.message ||
                      error.message ||
                      "Registration failed. Please try again.",
                  });

                } finally {

                  setSubmitting(false);

                }

              }}

            >

              {({ errors, touched, isSubmitting, status }) => (

                <Form className="space-y-4">

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full name
                    </label>

                    <div className="relative">

                      <UserRound
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                    {touched.name && errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}

                  </div>

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

                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                    </div>

                    {touched.email && errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}

                  </div>

                  <div>

                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Password
                    </label>

                    <div className="relative">

                      <LockKeyhole
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Field
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="At least 8 characters"
                        autoComplete="new-password"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                    {touched.password && errors.password && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.password}
                      </p>
                    )}

                  </div>

                  <div>

                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Confirm password
                    </label>

                    <div className="relative">

                      <LockKeyhole
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        autoComplete="new-password"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        aria-label={
                          showConfirmPassword
                            ? "Hide confirm password"
                            : "Show confirm password"
                        }
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                      >

                        {showConfirmPassword ? (
                          <EyeOff size={19} />
                        ) : (
                          <Eye size={19} />
                        )}

                      </button>

                    </div>

                    {touched.confirmPassword && errors.confirmPassword && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}

                  </div>

                  {status?.error && (
                    <p
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
                    >
                      {status.error}
                    </p>
                  )}

                  {status?.success && (
                    <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
                      {status.success}
                    </p>
                  )}

                  <div className="flex items-start gap-3 pt-1">

                    <Field
                      id="terms"
                      name="terms"
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 accent-blue-600"
                    />

                    <label
                      htmlFor="terms"
                      className="text-sm leading-6 text-slate-600"
                    >
                      I agree to the{" "}

                      <Link
                        to="/terms"
                        className="font-semibold text-blue-600 hover:text-blue-800"
                      >
                        Terms of Service
                      </Link>{" "}

                      and{" "}

                      <Link
                        to="/privacy"
                        className="font-semibold text-blue-600 hover:text-blue-800"
                      >
                        Privacy Policy
                      </Link>.

                    </label>

                  </div>

                  {touched.terms && errors.terms && (
                    <p className="text-xs text-red-500">
                      {errors.terms}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 hover:shadow-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-60"
                  >

                    {isSubmitting ? "Creating Account..." : "Create Account"}

                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />

                  </button>

                </Form>

              )}

            </Formik>

            <p className="mt-7 text-center text-sm text-slate-600">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-bold text-blue-600 transition hover:text-blue-800"
              >
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );

};

export default Register;
