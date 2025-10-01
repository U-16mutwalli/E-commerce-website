import React from 'react';

const logs = [
  'User John updated an order.',
  'Admin Jane added a new product.',
  'Manager Alex updated delivery status.',
];

const ActivityLog: React.FC = () => (
  <div className="rounded-lg bg-white p-6 shadow-md">
    <h2 className="mb-4 text-xl font-semibold">Recent Activities</h2>
    <ul className="space-y-2">
      {logs.map((log, i) => (
        <li key={i} className="text-gray-700 border-b pb-2">
          {log}
        </li>
      ))}
    </ul>
  </div>
);

export default ActivityLog;
