import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.1.x',
    speed: 'Lightning Fast ⚡️'
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <ul className="space-y-2">
              {Object.entries(serverInfo).map(([key, value]) => (
                <li key={key} className="flex justify-between text-lg">
                  <span className="font-semibold text-blue-600 capitalize">{key}:</span>
                  <span className="text-blue-800 font-bold">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-md border-2 border-green-200 hover:border-green-400 transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Users {loading && '⏳'}
            </h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-green-300 rounded w-3/4"></div>
                  <div className="h-4 bg-green-300 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-green-100 p-2 rounded-md shadow-sm hover:bg-green-200 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-50 border-2 border-yellow-300 rounded-full px-6 py-2 text-yellow-700 font-bold shadow-md hover:bg-yellow-100 transition-all">
            Built with Bun + React + TypeScript 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
