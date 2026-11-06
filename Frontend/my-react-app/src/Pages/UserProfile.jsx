
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { logoutUser } from "../redux/authSlice.js";

import { User,Mail,ShieldCheck,LogOut, ArrowLeft, BookOpen,Clock,GraduationCap, ChevronDown, ChevronUp,Trash2} from "lucide-react";

const UserProfile = () => {

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Roadmap states
    const [roadmaps, setRoadmaps] = useState([]);
    const [roadmapLoading, setRoadmapLoading] = useState(false);
    const [roadmapError, setRoadmapError] = useState("");
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    // Fetch user's roadmaps
    useEffect(() => {

        const fetchRoadmaps = async () => {

            try {
                setRoadmapLoading(true);
                setRoadmapError("");

                const res = await axios.get(
                    "http://localhost:9000/roadmapapi/my-roadmaps",
                    {
                        withCredentials: true
                    }
                );

                setRoadmaps(res.data.roadmaps || []);

            } catch (error) {

                setRoadmapError(
                    error.response?.data?.message ||
                    "Unable to fetch your roadmaps."
                );

            } finally {
                setRoadmapLoading(false);
            }
        };

        if (user) {
            fetchRoadmaps();
        }

    }, [user]);

    // Delete Roadmap
    const handleDeleteRoadmap = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this roadmap?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            await axios.delete(
                `http://localhost:9000/roadmapapi/delete/${id}`,
                {
                    withCredentials: true
                }
            );

            setRoadmaps((prevRoadmaps) =>
                prevRoadmaps.filter((item) => item._id !== id)
            );

            if (selectedRoadmap === id) {
                setSelectedRoadmap(null);
            }

        } catch (error) {

            setRoadmapError(
                error.response?.data?.message ||
                "Unable to delete roadmap."
            );

        }
    };

    // Logout functionality
    const handleLogout = async () => {

        try {
            setLoading(true);
            setError("");

            const res = await axios.post(
                "http://localhost:9000/Authapi/Logoutuser",
                {},
                {
                    withCredentials: true
                }
            );

            console.log(res.data.message);

            dispatch(logoutUser());

            localStorage.removeItem("user");

            navigate("/");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Logout failed. Please try again."
            );

        } finally {
            setLoading(false);
        }
    };

    // Login check
    if (!user) {

        return (
            <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">

                <h2 className="text-2xl font-bold text-slate-800">
                    Please Login First
                </h2>

                <Link
                    to="/login"
                    className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                >
                    Go to Login
                </Link>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-slate-50 px-4 py-12">

            <div className="mx-auto max-w-3xl">

                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-blue-600"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">

                    <div className="bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-12 text-center">

                        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white text-4xl font-bold text-blue-600 shadow-lg">
                            {user.name?.charAt(0).toUpperCase() || "U"}
                        </div>

                        <h1 className="mt-5 text-3xl font-bold text-white">
                            {user.name}
                        </h1>

                        <p className="mt-2 text-blue-100">
                            Welcome to your SkillNepal AI profile
                        </p>

                    </div>

                    <div className="p-8">

                        <h2 className="mb-6 text-xl font-bold text-slate-800">
                            Account Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <User size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Full Name
                                    </p>

                                    <p className="font-semibold text-slate-800">
                                        {user.name}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Email Address
                                    </p>

                                    <p className="font-semibold text-slate-800">
                                        {user.email}
                                    </p>
                                </div>

                            </div>

                            <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">

                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <ShieldCheck size={22} />
                                </div>

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Account Role
                                    </p>

                                    <p className="font-semibold capitalize text-slate-800">
                                        {user.role || "User"}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* My Learning Roadmaps */}
                        <div className="mt-10 border-t border-slate-100 pt-8">

                            <div className="mb-6 flex items-center gap-3">

                                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                                    <BookOpen size={23} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-800">
                                        My Learning Roadmaps
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        Your saved AI-generated learning plans
                                    </p>
                                </div>

                            </div>

                            {roadmapLoading && (

                                <div className="py-8 text-center">

                                    <p className="font-medium text-slate-500">
                                        Loading your roadmaps...
                                    </p>

                                </div>

                            )}

                            {roadmapError && (

                                <p className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
                                    {roadmapError}
                                </p>

                            )}

                            {!roadmapLoading &&
                                !roadmapError &&
                                roadmaps.length === 0 && (

                                    <div className="rounded-2xl bg-slate-50 p-8 text-center">

                                        <BookOpen
                                            size={35}
                                            className="mx-auto mb-3 text-slate-400"
                                        />

                                        <h3 className="font-semibold text-slate-700">
                                            No Roadmaps Yet
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-500">
                                            Start your learning journey by generating your first roadmap.
                                        </p>

                                        <Link
                                            to="/generate-roadmap"
                                            className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                                        >
                                            Generate Roadmap
                                        </Link>

                                    </div>

                                )}

                            {!roadmapLoading && !roadmapError && (

                                <div className="space-y-5">

                                    {roadmaps.map((item) => (

                                        <div
                                            key={item._id}
                                            className="overflow-hidden rounded-2xl border border-slate-200 transition hover:border-blue-300 hover:shadow-md"
                                        >

                                            <div className="p-5">

                                                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

                                                    <div>

                                                        <h3 className="text-lg font-bold text-slate-800">
                                                            {item.targetCareer}
                                                        </h3>

                                                        <p className="mt-1 text-sm text-slate-500">
                                                            {item.experienceLevel} Level
                                                        </p>

                                                    </div>

                                                    <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                                                        Saved Roadmap
                                                    </span>

                                                </div>

                                                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">

                                                    <div className="flex items-center gap-3">

                                                        <GraduationCap
                                                            size={20}
                                                            className="text-blue-600"
                                                        />

                                                        <div>
                                                            <p className="text-xs text-slate-500">
                                                                Education
                                                            </p>

                                                            <p className="text-sm font-semibold text-slate-700">
                                                                {item.education}
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className="flex items-center gap-3">

                                                        <BookOpen
                                                            size={20}
                                                            className="text-blue-600"
                                                        />

                                                        <div>
                                                            <p className="text-xs text-slate-500">
                                                                Skills
                                                            </p>

                                                            <p className="text-sm font-semibold text-slate-700">
                                                                {item.skills}
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className="flex items-center gap-3">

                                                        <Clock
                                                            size={20}
                                                            className="text-blue-600"
                                                        />

                                                        <div>
                                                            <p className="text-xs text-slate-500">
                                                                Daily Study Hours
                                                            </p>

                                                            <p className="text-sm font-semibold text-slate-700">
                                                                {item.dailyStudyHours} Hours
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>

                                                {/* View Roadmap Details */}
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setSelectedRoadmap(
                                                            selectedRoadmap === item._id
                                                                ? null
                                                                : item._id
                                                        )
                                                    }
                                                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                                                >

                                                    {selectedRoadmap === item._id
                                                        ? "Hide Roadmap Details"
                                                        : "View Roadmap Details"}

                                                    {selectedRoadmap === item._id
                                                        ? <ChevronUp size={19} />
                                                        : <ChevronDown size={19} />}

                                                </button>

                                                {/* Delete Roadmap Button */}
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteRoadmap(item._id)}
                                                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-5 py-3 font-semibold text-red-600 transition hover:bg-red-100"
                                                >
                                                    <Trash2 size={19} />
                                                    Delete Roadmap
                                                </button>

                                            </div>

                                            {selectedRoadmap === item._id && (

                                                <div className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7">

                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{

                                                            h1: ({ children }) => (
                                                                <h1 className="mb-4 text-2xl font-bold text-slate-800">
                                                                    {children}
                                                                </h1>
                                                            ),

                                                            h2: ({ children }) => (
                                                                <h2 className="mb-3 mt-7 text-xl font-bold text-slate-800">
                                                                    {children}
                                                                </h2>
                                                            ),

                                                            h3: ({ children }) => (
                                                                <h3 className="mb-2 mt-5 text-lg font-bold text-slate-800">
                                                                    {children}
                                                                </h3>
                                                            ),

                                                            p: ({ children }) => (
                                                                <p className="mb-4 leading-7 text-slate-600">
                                                                    {children}
                                                                </p>
                                                            ),

                                                            ul: ({ children }) => (
                                                                <ul className="mb-4 list-disc space-y-2 pl-6 text-slate-600">
                                                                    {children}
                                                                </ul>
                                                            ),

                                                            ol: ({ children }) => (
                                                                <ol className="mb-4 list-decimal space-y-2 pl-6 text-slate-600">
                                                                    {children}
                                                                </ol>
                                                            ),

                                                            li: ({ children }) => (
                                                                <li className="leading-7">
                                                                    {children}
                                                                </li>
                                                            ),

                                                            strong: ({ children }) => (
                                                                <strong className="font-bold text-slate-800">
                                                                    {children}
                                                                </strong>
                                                            ),

                                                            blockquote: ({ children }) => (
                                                                <blockquote className="my-4 border-l-4 border-blue-500 pl-4 italic text-slate-600">
                                                                    {children}
                                                                </blockquote>
                                                            ),

                                                            table: ({ children }) => (
                                                                <div className="my-5 overflow-x-auto">
                                                                    <table className="w-full border-collapse text-sm">
                                                                        {children}
                                                                    </table>
                                                                </div>
                                                            ),

                                                            th: ({ children }) => (
                                                                <th className="border border-slate-300 bg-blue-100 p-3 text-left font-semibold text-slate-800">
                                                                    {children}
                                                                </th>
                                                            ),

                                                            td: ({ children }) => (
                                                                <td className="border border-slate-300 p-3 text-slate-600">
                                                                    {children}
                                                                </td>
                                                            ),

                                                            hr: () => (
                                                                <hr className="my-6 border-slate-300" />
                                                            )

                                                        }}
                                                    >
                                                        {item.roadmap}
                                                    </ReactMarkdown>

                                                </div>

                                            )}

                                        </div>

                                    ))}

                                </div>

                            )}

                        </div>

                        {error && (

                            <p className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </p>

                        )}

                        <button
                            type="button"
                            onClick={handleLogout}
                            disabled={loading}
                            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 px-6 py-4 font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-60"
                        >

                            <LogOut size={20} />

                            {loading ? "Logging Out..." : "Logout"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default UserProfile;
