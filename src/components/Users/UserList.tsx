import React, {useState} from 'react';

const mockUsers = [
  {id: 1, name: 'John Doe', role: 'Manager', isActive: true},
  {id: 2, name: 'Jane Smith', role: 'Admin', isActive: false},
];

const UserList: React.FC = () => {
  const [users, setUsers] = useState(mockUsers);

  const toggleBlock = (id: number) => {
    setUsers(
      users.map((u) => (u.id === id ? {...u, isActive: !u.isActive} : u)),
    );
  };

  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Users</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-left">
            <th className="p-3">Name</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.isActive ? 'Active' : 'Blocked'}</td>
              <td className="p-3 text-center">
                <button
                  onClick={() => toggleBlock(user.id)}
                  className={`rounded px-3 py-1 text-white ${
                    user.isActive ? 'bg-red-500' : 'bg-green-500'
                  }`}
                >
                  {user.isActive ? 'Block' : 'Unblock'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
