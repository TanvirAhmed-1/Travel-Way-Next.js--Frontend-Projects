"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { signInUser } = useAuth();
  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async ({ email, password }: LoginFormInputs) => {
    try {
      const res = await signInUser(email, password);
      route.push("/");
      Swal.fire({
        icon: "success",
        title: "Welcome Back!",
        text: "You have logged in successfully!",
        confirmButtonColor: "#6366f1",
      });
      console.log(res.user);
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message || "Something went wrong",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Login to Your Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Welcome back! Please enter your credentials.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Link */}
          <p className="text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              href="/register"
              className="text-indigo-500 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
