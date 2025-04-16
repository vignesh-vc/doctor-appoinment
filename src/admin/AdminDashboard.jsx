import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    today: 0,
    week: 0,
    month: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/appointment-stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  const chartData = [
    { name: 'Today', value: stats.today },
    { name: 'This Week', value: stats.week },
    { name: 'This Month', value: stats.month },
    { name: 'Total', value: stats.total },
  ];

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-base sm:text-lg font-semibold">Total</h2>
          <p className="text-xl sm:text-2xl text-blue-600">{stats.total}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-base sm:text-lg font-semibold">Today</h2>
          <p className="text-xl sm:text-2xl text-green-600">{stats.today}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-base sm:text-lg font-semibold">This Week</h2>
          <p className="text-xl sm:text-2xl text-yellow-600">{stats.week}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <h2 className="text-base sm:text-lg font-semibold">This Month</h2>
          <p className="text-xl sm:text-2xl text-purple-600">{stats.month}</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Appointment Stats Chart</h2>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
