import React, { useState } from "react";
import { Link } from "react-router";
import {Check,X,Sparkles,Zap,Crown,ArrowRight,ShieldCheck,CircleHelp,} from "lucide-react";

const Pricing = () => {
const [billing, setBilling] = useState("monthly");

const plans = [
{
name: "Free",
description: "Start building your career without spending anything.",
monthlyPrice: 0,
yearlyPrice: 0,
icon: Zap,
popular: false,
buttonText: "Get Started Free",
features: [
{ text: "Basic career roadmaps", included: true },
{ text: "Basic resume guidance", included: true },
{ text: "Limited interview questions", included: true },
{ text: "AI resume analysis", included: false },
{ text: "AI interview feedback", included: false },
{ text: "Advanced career insights", included: false },
],
},
{
name: "Pro",
description: "Get smarter tools to prepare for your next opportunity.",
monthlyPrice: 499,
yearlyPrice: 4990,
icon: Sparkles,
popular: true,
buttonText: "Choose Pro",
features: [
{ text: "Complete career roadmaps", included: true },
{ text: "AI-powered resume analysis", included: true },
{ text: "More interview practice", included: true },
{ text: "Personalized improvement tips", included: true },
{ text: "Track learning progress", included: true },
{ text: "Priority support", included: false },
],
},
{
name: "Premium",
description: "Get the full toolkit for your career development.",
monthlyPrice: 999,
yearlyPrice: 9990,
icon: Crown,
popular: false,
buttonText: "Choose Premium",
features: [
{ text: "Everything in Pro", included: true },
{ text: "Advanced AI interview practice", included: true },
{ text: "Detailed resume insights", included: true },
{ text: "Personalized learning recommendations", included: true },
{ text: "Progress and performance history", included: true },
{ text: "Priority support", included: true },
],
},
];

const faqs = [
{
question: "Can I use SkillNepal AI for free?",
answer:
"Yes. The Free plan is designed to help you explore career roadmaps, basic resume guidance, and selected interview practice features.",
},
{
question: "Can I change my plan later?",
answer:
"The intended subscription design allows users to upgrade or change plans. This will become functional once account and subscription management are connected to the backend.",
},
{
question: "Which payment methods will be supported?",
answer:
"Payment methods will depend on the payment gateway we integrate and its supported options. We will confirm the available methods during backend development.",
},
{
question: "Can I cancel my subscription?",
answer:
"We plan to support subscription management after the backend is implemented. Cancellation rules will be displayed clearly before subscriptions go live.",
},
];

return (
<div className="min-h-screen bg-white text-slate-900">

<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
<div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
<div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-100/50 blur-3xl" />

    <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
        <Sparkles size={17} />
        Simple and Transparent Pricing
      </div>

      <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Invest in Your
        <span className="block text-blue-600">Career Growth</span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        Choose the tools that match your goals. Start for free and explore
        more advanced career preparation features as you grow.
      </p>

      
      <div className="mt-9 inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
        <button
          onClick={() => setBilling("monthly")}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            billing === "monthly"
              ? "bg-blue-600 text-white shadow"
              : "text-slate-600 hover:text-blue-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBilling("yearly")}
          className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
            billing === "yearly"
              ? "bg-blue-600 text-white shadow"
              : "text-slate-600 hover:text-blue-600"
          }`}
        >
          Yearly
          <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
            Save
          </span>
        </button>
      </div>

      <p className="mt-3 text-xs text-slate-500">
        Illustrative prices in NPR. Final pricing will be decided before launch.
      </p>
    </div>
  </section>

  
  <section className="px-6 py-16 sm:py-20">
    <div className="mx-auto grid max-w-7xl items-stretch gap-7 lg:grid-cols-3">
      {plans.map((plan) => {
        const Icon = plan.icon;
        const price =
          billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

        return (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
              plan.popular
                ? "border-blue-500 bg-white shadow-xl shadow-blue-900/10 ring-1 ring-blue-500"
                : "border-slate-200 bg-white shadow-sm"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                MOST POPULAR
              </div>
            )}

            <div className="flex items-center justify-between">
              <div
                className={`rounded-2xl p-3 ${
                  plan.popular
                    ? "bg-blue-600 text-white"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                <Icon size={26} />
              </div>
              {plan.name === "Free" && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Start here
                </span>
              )}
            </div>

            <h2 className="mt-6 text-2xl font-extrabold">{plan.name}</h2>
            <p className="mt-2 min-h-12 leading-6 text-slate-500">
              {plan.description}
            </p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold tracking-tight">
                {price === 0 ? "Free" : `Rs. ${price.toLocaleString("en-IN")}`}
              </span>
              {price > 0 && (
                <span className="text-sm text-slate-500">
                  /{billing === "monthly" ? "month" : "year"}
                </span>
              )}
            </div>

            {billing === "yearly" && price > 0 && (
              <p className="mt-2 text-sm font-medium text-green-600">
                Equivalent to Rs.{" "}
                {Math.round(price / 12).toLocaleString("en-IN")}/month
              </p>
            )}

            <Link
              to="/register"
              className={`mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold transition ${
                plan.popular
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                  : "border border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {plan.buttonText}
              <ArrowRight size={18} />
            </Link>

            <div className="my-7 border-t border-slate-100" />

            <h3 className="text-sm font-bold text-slate-800">
              What's included
            </h3>

            <ul className="mt-5 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature.text}
                  className={`flex items-start gap-3 text-sm leading-6 ${
                    feature.included ? "text-slate-600" : "text-slate-400"
                  }`}
                >
                  {feature.included ? (
                    <Check
                      size={19}
                      className="mt-0.5 shrink-0 text-green-500"
                    />
                  ) : (
                    <X
                      size={18}
                      className="mt-0.5 shrink-0 text-slate-300"
                    />
                  )}
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>

    <div className="mx-auto mt-10 flex max-w-3xl items-start gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-5">
      <ShieldCheck
        size={23}
        className="mt-0.5 shrink-0 text-blue-600"
      />
      <div>
        <h3 className="font-bold text-slate-800">
          Clear pricing, no surprises
        </h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          These are proposed plan details for the frontend. Actual feature
          limits, subscription terms, and payment processing will be
          configured securely in the backend before launch.
        </p>
      </div>
    </div>
  </section>


  <section className="bg-slate-50 px-6 py-20">
    <div className="mx-auto max-w-3xl">
      <div className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
          <CircleHelp size={25} />
        </div>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-slate-600">
          Have questions about choosing a plan? Start here.
        </p>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-blue-200 open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-800">
              {faq.question}
              <span className="text-xl text-blue-600 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 pr-6 text-sm leading-7 text-slate-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate-600">Ready to start your career journey?</p>
        <Link
          to="/register"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-700"
        >
          Create Your Account
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  </section>
</div>

);
};

export default Pricing;