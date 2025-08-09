"use client";

import { useAuth } from "@/hooks/useAuth";
import AxiosPublic from "@/lib/AxiosPublic";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const { signUpUser, signInWithGoogle } = useAuth();
  const axiosPublic = AxiosPublic();

  const route = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormInputs>();

  const onSubmit = async ({ name, email, password }: RegisterFormInputs) => {
    try {
      const res = await signUpUser(email, password);
      console.log(res.user);

      await axiosPublic.post("/users", { name, email });

      Swal.fire({
        title: "Success!",
        text: "Registration Successful",
        icon: "success",
        confirmButtonColor: "#6366f1",
      });

      route.push("/");

      reset();
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithGoogle();
      console.log(res.user);

      const user = {
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL,
      };

      await axiosPublic.post("/users", user);
      route.push("/");
      Swal.fire({
        title: "Good job!",
        text: "Logged in with Google!",
        icon: "success",
        confirmButtonColor: "#6366f1",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Google sign-in failed",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create an Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Join us and explore amazing features.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={handleGoogle}
            className="flex items-center gap-2 bg-gray-200 border border-gray-400 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            <FcGoogle className="text-xl" /> Continue with Google
          </button>
        </div>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-indigo-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
