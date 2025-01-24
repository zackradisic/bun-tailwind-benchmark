import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight drop-shadow-lg animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Server-Side Rendering</h2>
            <p className="text-gray-600">Bun seamlessly handles both frontend and backend in one simple server.</p>
          </div>

          <div className="relative">
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              </div>
            ) : (
              <table className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-500 text-white">
                  <tr>
                    <th className="p-3 text-left">ID</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-blue-50 transition-colors">
                      <td className="p-3 text-gray-700">{user.id}</td>
                      <td className="p-3 text-gray-700">{user.name}</td>
                      <td className="p-3 text-gray-700">{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
              <span className="text-sm text-gray-600">Real-time data fetching</span>
            </div>
            <div className="text-sm text-blue-600 font-semibold hover:underline cursor-pointer">
              Refresh Data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
