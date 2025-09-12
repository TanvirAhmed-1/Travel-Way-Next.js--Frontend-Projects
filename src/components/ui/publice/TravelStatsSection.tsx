"use client";
import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaGlobe,
  FaMountain,
  FaPhone,
  FaStar,
  FaUsers,
  FaPassport,
  FaHotel,
} from "react-icons/fa";

//  Counter Animation Hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("stats-section");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count;
};

// Single Stat Card Component
const StatCard = ({ number, suffix, label, icon: Icon, color }: any) => {
  const count = useCountUp(number, 2500);

  return (
    <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-md hover:shadow-xl border border-white/50 hover:border-white/70 transition-all duration-500 hover:scale-105 text-center">
      <div
        className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${color} rounded-xl mb-3 group-hover:scale-110 transition-all duration-300 shadow-md`}
      >
        <Icon className="text-white w-5 h-5" />
      </div>
      <div className="text-lg lg:text-xl font-bold text-gray-800 mb-1">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-xs lg:text-xs font-semibold text-gray-700 mb-1">
        {label}
      </div>
    </div>
  );
};

// Main Section
const TravelStatsSection = () => {
  const stats = [
    {
      number: 15000,
      suffix: "+",
      label: "Happy Travelers",
      icon: FaHeart,
      color: "from-pink-500 to-red-500",
    },
    {
      number: 120,
      suffix: "+",
      label: "Destinations",
      icon: FaGlobe,
      color: "from-blue-500 to-indigo-500",
    },
    {
      number: 850,
      suffix: "+",
      label: "Tour Packages",
      icon: FaMountain,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support",
      icon: FaPhone,
      color: "from-purple-500 to-violet-500",
    },
    {
      number: 4.9,
      suffix: "/5",
      label: "Customer Rating",
      icon: FaStar,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: 50,
      suffix: "+",
      label: "Expert Guides",
      icon: FaUsers,
      color: "from-teal-500 to-cyan-500",
    },
    {
      number: 98,
      suffix: "%",
      label: "Success Rate",
      icon: FaPassport,
      color: "from-indigo-500 to-purple-500",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Hotels Partner",
      icon: FaHotel,
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section
      id="stats-section"
      className="py-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-[95%] mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose Travel Way?
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Join thousands of travelers who trust us to create their perfect
            adventures.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelStatsSection;
