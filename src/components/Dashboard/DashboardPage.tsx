import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from 'recharts';

const data = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 7000 },
  { month: 'May', sales: 3000 },
  { month: 'June', sales: 3000 },
  { month: 'July', sales: 100000 },
  { month: 'August', sales: 0 },
  { month: 'September', sales: 2000 },
  { month: 'October', sales: 3500 },
  { month: 'November', sales: 4000 },
  { month: 'December', sales: 5000 },
];


const DashboardPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-white p-4 shadow">
          <p className="text-gray-600">Total Sales</p>
          <h2 className="text-2xl font-bold">₹45,000</h2>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <p className="text-gray-600">Total Users</p>
          <h2 className="text-2xl font-bold">120</h2>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <p className="text-gray-600">Top Product</p>
          <h2 className="text-2xl font-bold">Productname</h2>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-semibold">Sales Chart</h2>
        <LineChart width={600} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#f87171"
            strokeWidth={2}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default DashboardPage;
