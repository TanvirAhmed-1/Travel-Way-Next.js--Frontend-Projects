"use client";

import { useEffect, useState } from "react";
import useAxiosSecure from "@/lib/AxiosSecure";
import { FaUser, FaBoxOpen, FaHeart, FaBookOpen } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import { useAuth } from "@/hooks/useAuth";

// API response type
interface AdminHomeData {
  user: number;
  torPackage: number;
  wish: number;
  booked: number;
}

// Chart data type
interface ChartItem {
  name: string;
  value: number;
}

// Props for SummaryCard
interface SummaryCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  gradient: string;
  iconBg: string;
}

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState<AdminHomeData>({
    user: 0,
    torPackage: 0,
    wish: 0,
    booked: 0,
  });

  useEffect(() => {
    axiosSecure
      .get<AdminHomeData>("/admin/home")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err.message));
  }, [axiosSecure]);

  // Prepare data for charts
  const chartData: ChartItem[] = [
    { name: "Users", value: data.user },
    { name: "Packages", value: data.torPackage },
    { name: "Wishlist", value: data.wish },
    { name: "Bookings", value: data.booked },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 px-6 py-8">
      {/* Header Section */}
      <div className="mb-10">
        <div className="flex items-center space-x-4 mb-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
            <FaUser className="text-white text-xl" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Welcome back, {user?.displayName || "Admin"}!
            </h1>
            <p className="text-gray-600 text-base">Here's your dashboard overview</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <SummaryCard
          icon={<FaUser className="text-2xl" />}
          title="Total Users"
          value={data.user}
          gradient="from-blue-500 to-blue-600"
          iconBg="bg-blue-100 text-blue-600"
        />
        <SummaryCard
          icon={<FaBoxOpen className="text-2xl" />}
          title="Total Packages"
          value={data.torPackage}
          gradient="from-emerald-500 to-emerald-600"
          iconBg="bg-emerald-100 text-emerald-600"
        />
        <SummaryCard
          icon={<FaHeart className="text-2xl" />}
          title="Total Wishlists"
          value={data.wish}
          gradient="from-pink-500 to-rose-600"
          iconBg="bg-pink-100 text-pink-600"
        />
        <SummaryCard
          icon={<FaBookOpen className="text-2xl" />}
          title="Total Bookings"
          value={data.booked}
          gradient="from-amber-500 to-orange-600"
          iconBg="bg-amber-100 text-amber-600"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Statistics Overview</h3>
              <p className="text-gray-500 text-sm">Current data visualization</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#667eea" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#764ba2" stopOpacity={0.7}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <YAxis 
                allowDecimals={false} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="value" 
                fill="url(#barGradient)" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Trend Analysis</h3>
              <p className="text-gray-500 text-sm">Performance metrics</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.5} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <YAxis 
                allowDecimals={false} 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748b', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#10b981" 
                strokeWidth={3}
                fill="url(#areaGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, title, value, gradient, iconBg }: SummaryCardProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      <div className={`relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group-hover:-translate-y-1`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-gray-600 text-sm font-medium mb-1">{title}</p>
            <h3 className="text-3xl font-bold text-gray-800">{value.toLocaleString()}</h3>
          </div>
          <div className={`p-4 rounded-2xl ${iconBg} group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-green-600 font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;