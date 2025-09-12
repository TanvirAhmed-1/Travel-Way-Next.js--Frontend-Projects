"use client";

import { useAuth } from "@/hooks/useAuth";
import AxiosPublic from "@/lib/AxiosPublic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import {
  FaPlane,
  FaGlobe,
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
  FaMapMarkedAlt,
  FaMountain,
  FaCompass,
  FaPassport,
} from "react-icons/fa";

type RegisterFormInputs = {
  name: string;
  email: string;
  password: string;
};

const Register: React.FC = () => {
  const { signUpUser, signInWithGoogle } = useAuth();
  const axiosPublic = AxiosPublic();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormInputs>();

  const onSubmit = async ({ name, email, password }: RegisterFormInputs) => {
    try {
      const res = await signUpUser(email, password);
      console.log(res.user);

      await axiosPublic.post("/users", { name, email });

      Swal.fire({
        title: "Welcome Aboard!",
        text: "Your travel account has been created successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
      });

      router.push("/");
      reset();
    } catch (error: any) {
      console.error(error);
      Swal.fire({
        title: "Registration Failed",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
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
      router.push("/");

      Swal.fire({
        title: "Journey Begins!",
        text: "Successfully signed in with Google!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Error!",
        text: "Google sign-in failed",
        icon: "error",
        confirmButtonColor: "#ef4444",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#fff",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-indigo-600 to-purple-700 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-16 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-12 w-20 h-20 bg-amber-300/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-12 w-28 h-28 bg-blue-300/15 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-bounce"></div>

        {/* Travel Icons */}
        <FaCompass
          className="absolute top-24 right-40 text-white/10 text-7xl animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <FaPassport className="absolute bottom-48 left-40 text-white/10 text-5xl animate-pulse" />
        <FaMapMarkedAlt className="absolute top-48 left-8 text-white/10 text-4xl animate-bounce" />
        <FaMountain className="absolute bottom-24 right-8 text-white/10 text-6xl animate-pulse" />
      </div>

      {/* Main Register Container */}
      <div className="bg-white/95 backdrop-blur-lg shadow-2xl rounded-3xl w-full max-w-lg p-8 relative z-10 border border-white/30">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <FaPlane className="text-4xl text-indigo-600 transform rotate-45 mr-2" />
              <FaGlobe className="absolute -bottom-1 -right-1 text-2xl text-amber-500" />
            </div>
            <div className="ml-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Travel Way
              </h1>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Start Your Adventure
          </h2>
          <p className="text-gray-600">
            Join thousands of travelers and discover the world with us!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700 text-sm">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-indigo-400" />
              </div>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700 text-sm">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-indigo-400" />
              </div>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700 text-sm">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-indigo-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)/,
                    message:
                      "Password must contain at least one letter and one number",
                  },
                })}
                placeholder="Create a strong password"
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-200 rounded-xl outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-indigo-400 hover:text-indigo-600 transition-colors"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-xl border border-blue-200">
            <p>
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="text-indigo-600 hover:underline font-medium"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-indigo-600 hover:underline font-medium"
              >
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creating Account...
              </>
            ) : (
              <>
                <FaPassport />
                Begin Your Journey
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-gray-500 font-medium">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 hover:border-gray-300 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-gray-700 hover:shadow-md"
        >
          <FcGoogle className="text-2xl" />
          Continue with Google
        </button>

        {/* Login Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Already exploring with us?</p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-colors"
          >
            <FaPlane className="text-sm transform rotate-45" />
            Sign In to Your Account
          </Link>
        </div>

        {/* Benefits Section */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-center text-sm font-semibold text-gray-700 mb-3">
            Join Travel Way and enjoy:
          </h3>
          <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
              <span>Exclusive deals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Travel rewards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <span>Expert guides</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Register;
