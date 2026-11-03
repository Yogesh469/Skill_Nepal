
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logoutUser } from "../redux/authSlice.js";
import { User, Mail, ShieldCheck, LogOut, ArrowLeft } from "lucide-react";

const UserProfile = () => {

    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
                error.response?.data?.message || "Logout failed. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

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

                {/* Back Button */}
                <Link
                    to="/"
                    className="mb-8 inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-blue-600"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50">

                    {/* Header */}
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

                    {/* User Details */}
                    <div className="p-8">

                        <h2 className="mb-6 text-xl font-bold text-slate-800">
                            Account Information
                        </h2>

                        <div className="space-y-5">

                            {/* Name */}
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

                            {/* Email */}
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

                            {/* Role */}
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

                        {/* Error Message */}
                        {error && (
                            <p className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-600">
                                {error}
                            </p>
                        )}

                        {/* Logout Button */}
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
