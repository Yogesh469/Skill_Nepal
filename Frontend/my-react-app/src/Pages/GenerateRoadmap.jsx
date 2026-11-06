
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { BrainCircuit, GraduationCap, Code, Target, Clock, Sparkles, BookOpen, ArrowRight, LoaderCircle, LockKeyhole, AlertCircle, RefreshCw } from "lucide-react";




const roadmapSchema = Yup.object({
    education: Yup.string()
        .required("Please select your education level"),

    skills: Yup.string()
        .required("Please enter your current skills"),

    targetCareer: Yup.string()
        .required("Please enter your target career"),

    experienceLevel: Yup.string()
        .required("Please select your experience level"),

    dailyStudyHours: Yup.string()
        .required("Please select your daily study hours")
});




const initialValues = {
    education: "",
    skills: "",
    targetCareer: "",
    experienceLevel: "Beginner",
    dailyStudyHours: "2"
};



const GenerateRoadmap = () => {

    const user = useSelector((state) => state.auth.user);

    const [roadmap, setRoadmap] = useState("");
    const [error, setError] = useState("");




    if (!user) {

        return (

            <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5">

                <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-10 text-center">

                    <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                        <LockKeyhole size={36} className="text-blue-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-3">
                        Login Required
                    </h1>

                    <p className="text-slate-500 leading-7 mb-7">
                        Please log in to generate your personalized AI career roadmap.
                    </p>

                    <Link
                        to="/login"
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Login Now
                        <ArrowRight size={18} />
                    </Link>

                </div>

            </div>

        );

    }


    return (

        <div className="min-h-screen bg-slate-50 py-12 px-5">

            <div className="max-w-6xl mx-auto">




                <div className="text-center max-w-3xl mx-auto mb-12">

                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                        <Sparkles size={16} />
                        AI-Powered Career Guidance
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
                        Build Your Personalized
                        <span className="text-blue-600"> Career Roadmap</span>
                    </h1>

                    <p className="text-slate-500 text-base md:text-lg leading-8">
                        Tell us about your background, skills, and career goals.
                        Our AI will create a practical learning roadmap to help
                        you move towards your dream career.
                    </p>

                </div>


                <div className="grid lg:grid-cols-5 gap-8 items-start">




                    <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-lg p-6 md:p-9">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                <BrainCircuit size={25} className="text-blue-600" />
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-slate-900">
                                    Your Career Details
                                </h2>

                                <p className="text-sm text-slate-500 mt-1">
                                    Complete the information below
                                </p>
                            </div>

                        </div>


                        <Formik
                            initialValues={initialValues}
                            validationSchema={roadmapSchema}

                            onSubmit={async (values, { setSubmitting }) => {

                                try {

                                    setError("");
                                    setRoadmap("");

                                    const res = await axios.post(
                                        "http://localhost:9000/roadmapapi/generate",
                                        values,
                                        {
                                            withCredentials: true
                                        }
                                    );

                                    setRoadmap(res.data.roadmap);

                                } catch (error) {

                                    console.log(error);

                                    setError(
                                        error.response?.data?.message ||
                                        "Unable to generate your roadmap. Please try again."
                                    );

                                } finally {

                                    setSubmitting(false);

                                }

                            }}
                        >

                            {({ errors, touched, isSubmitting }) => (

                                <Form className="space-y-6">



                                    <div>

                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                                            <GraduationCap size={18} className="text-blue-600" />
                                            Education Level
                                        </label>

                                        <Field
                                            as="select"
                                            name="education"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-white text-slate-700"
                                        >

                                            <option value="">Select your education</option>
                                            <option value="SEE">SEE</option>
                                            <option value="+2">+2</option>
                                            <option value="Diploma">Diploma</option>
                                            <option value="BCA">BCA</option>
                                            <option value="BIT">BIT</option>
                                            <option value="BSc IT">BSc IT</option>
                                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                                            <option value="Master's Degree">Master's Degree</option>
                                            <option value="Other">Other</option>

                                        </Field>

                                        {touched.education && errors.education && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.education}
                                            </p>
                                        )}

                                    </div>




                                    <div>

                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                                            <Code size={18} className="text-blue-600" />
                                            Your Current Skills
                                        </label>

                                        <Field
                                            as="textarea"
                                            name="skills"
                                            rows="4"
                                            placeholder="Example: HTML, CSS, JavaScript, React, Node.js..."
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition resize-none"
                                        />

                                        <p className="text-xs text-slate-400 mt-2">
                                            Mention the technologies or skills you already know.
                                        </p>

                                        {touched.skills && errors.skills && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.skills}
                                            </p>
                                        )}

                                    </div>




                                    <div>

                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                                            <Target size={18} className="text-blue-600" />
                                            What Do You Want to Learn?
                                        </label>

                                        <Field
                                            name="targetCareer"
                                            type="text"
                                            placeholder="Example: Frontend Developer, Python, Data Science, UI/UX Design..."
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                                        />

                                        {touched.targetCareer && errors.targetCareer && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.targetCareer}
                                            </p>
                                        )}

                                    </div>




                                    <div>

                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                                            <BookOpen size={18} className="text-blue-600" />
                                            Experience Level
                                        </label>

                                        <Field
                                            as="select"
                                            name="experienceLevel"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-white text-slate-700"
                                        >

                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Advanced">Advanced</option>

                                        </Field>

                                        {touched.experienceLevel && errors.experienceLevel && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.experienceLevel}
                                            </p>
                                        )}

                                    </div>




                                    <div>

                                        <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                                            <Clock size={18} className="text-blue-600" />
                                            Daily Study Hours
                                        </label>

                                        <Field
                                            as="select"
                                            name="dailyStudyHours"
                                            className="w-full border border-slate-200 rounded-xl px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition bg-white text-slate-700"
                                        >

                                            <option value="1">1 hour per day</option>
                                            <option value="2">2 hours per day</option>
                                            <option value="3">3 hours per day</option>
                                            <option value="4">4 hours per day</option>
                                            <option value="5">5 hours per day</option>
                                            <option value="6">6 hours per day</option>

                                        </Field>

                                        {touched.dailyStudyHours && errors.dailyStudyHours && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.dailyStudyHours}
                                            </p>
                                        )}

                                    </div>




                                    {error && (

                                        <div className="flex items-start gap-3 bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl">

                                            <AlertCircle size={20} className="shrink-0 mt-0.5" />

                                            <p className="text-sm">
                                                {error}
                                            </p>

                                        </div>

                                    )}




                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 transition"
                                    >

                                        {isSubmitting ? (

                                            <>
                                                <LoaderCircle size={20} className="animate-spin" />
                                                Generating Your Roadmap...
                                            </>

                                        ) : (

                                            <>
                                                <Sparkles size={20} />
                                                Generate My Roadmap
                                                <ArrowRight size={19} />
                                            </>

                                        )}

                                    </button>

                                </Form>

                            )}

                        </Formik>

                    </div>



                    <div className="lg:col-span-2 space-y-6">




                        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-7 text-white shadow-lg">

                            <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-6">
                                <BrainCircuit size={30} />
                            </div>

                            <h2 className="text-2xl font-bold mb-3">
                                Your Journey Starts Here
                            </h2>

                            <p className="text-blue-100 leading-7 text-sm">
                                Get a personalized learning plan based on your
                                current knowledge, experience, and career goals.
                            </p>

                            <div className="mt-7 space-y-4">

                                {[
                                    "Personalized learning phases",
                                    "Essential skills and technologies",
                                    "Practical project suggestions",
                                    "Career preparation guidance"
                                ].map((item, index) => (

                                    <div key={index} className="flex items-center gap-3">

                                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                                            <ArrowRight size={14} />
                                        </div>

                                        <p className="text-sm text-blue-50">
                                            {item}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>




                        <div className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm">

                            <h3 className="font-bold text-slate-900 text-lg mb-5">
                                Tips for Better Results
                            </h3>

                            <div className="space-y-5">

                                <div>
                                    <p className="font-semibold text-slate-800 text-sm mb-1">
                                        Be honest about your skills
                                    </p>

                                    <p className="text-slate-500 text-sm leading-6">
                                        Mention only the technologies you currently understand.
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800 text-sm mb-1">
                                        Choose a clear goal
                                    </p>

                                    <p className="text-slate-500 text-sm leading-6">
                                        Specify what you want to learn, such as React, Python, or Data Science.
                                    </p>
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-800 text-sm mb-1">
                                        Set realistic study hours
                                    </p>

                                    <p className="text-slate-500 text-sm leading-6">
                                        Choose a schedule that you can follow consistently.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>




                {roadmap && (

                    <div className="mt-12 bg-white border border-blue-100 rounded-3xl shadow-lg p-6 md:p-10">

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">

                            <div className="flex items-center gap-4">

                                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                    <BookOpen size={25} className="text-blue-600" />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        Your AI-Generated Roadmap
                                    </h2>

                                    <p className="text-sm text-slate-500 mt-1">
                                        Your personalized learning journey
                                    </p>
                                </div>

                            </div>

                            <button
                                type="button"
                                onClick={() => setRoadmap("")}
                                className="inline-flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
                            >
                                <RefreshCw size={17} />
                                Create Another
                            </button>

                        </div>


                        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-8">

                            <div className="bg-white border border-blue-100 rounded-2xl p-5 md:p-8 shadow-sm">

                                <div className="
        text-slate-700 text-sm md:text-base leading-8 space-y-6

        [&_h1]:text-3xl [&_h1]:font-extrabold
        [&_h1]:text-blue-700 [&_h1]:mb-6
        [&_h1]:pb-4 [&_h1]:border-b [&_h1]:border-blue-100

        [&_h2]:text-2xl [&_h2]:font-bold
        [&_h2]:text-blue-700 [&_h2]:mt-10
        [&_h2]:mb-5 [&_h2]:pb-3
        [&_h2]:border-b [&_h2]:border-blue-100

        [&_h3]:text-xl [&_h3]:font-bold
        [&_h3]:text-slate-900 [&_h3]:mt-8
        [&_h3]:mb-4

        [&_h4]:text-lg [&_h4]:font-bold
        [&_h4]:text-blue-700 [&_h4]:mt-6
        [&_h4]:mb-3 [&_h4]:bg-blue-50
        [&_h4]:border-l-4 [&_h4]:border-blue-500
        [&_h4]:rounded-r-lg [&_h4]:px-4 [&_h4]:py-3

        [&_p]:mb-4 [&_p]:text-slate-600

        [&_ul]:list-disc [&_ul]:pl-6
        [&_ul]:space-y-2 [&_ul]:my-4

        [&_ol]:list-decimal [&_ol]:pl-6
        [&_ol]:space-y-2 [&_ol]:my-4

        [&_li]:pl-1 [&_li]:text-slate-600
        [&_li]:marker:text-blue-500

        [&_strong]:font-bold [&_strong]:text-slate-900

        [&_hr]:my-9 [&_hr]:border-slate-200

        [&_blockquote]:border-l-4
        [&_blockquote]:border-blue-400
        [&_blockquote]:bg-blue-50
        [&_blockquote]:rounded-r-lg
        [&_blockquote]:px-5 [&_blockquote]:py-3
        [&_blockquote]:my-5

        [&_table]:w-full [&_table]:border-collapse
        [&_table]:my-6 [&_table]:text-sm

        [&_thead]:bg-blue-600 [&_thead]:text-white

        [&_th]:px-4 [&_th]:py-3
        [&_th]:text-left [&_th]:font-semibold

        [&_td]:px-4 [&_td]:py-3
        [&_td]:border-b [&_td]:border-slate-200

        [&_tr:nth-child(even)]:bg-blue-50/50

        [&_code]:bg-blue-50 [&_code]:text-blue-700
        [&_code]:px-2 [&_code]:py-1 [&_code]:rounded-md
    ">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                        {roadmap}
                                    </ReactMarkdown>
                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </div>

    );

};

export default GenerateRoadmap;
