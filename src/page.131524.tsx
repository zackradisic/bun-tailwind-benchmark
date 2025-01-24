import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.0.0',
    startTime: Date.now()
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="font-semibold mr-2">Runtime:</span>
                <span className="bg-blue-200 px-2 py-1 rounded text-blue-800">
                  {serverInfo.runtime}
                </span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Version:</span>
                <span className="bg-blue-200 px-2 py-1 rounded text-blue-800">
                  {serverInfo.version}
                </span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold mr-2">Uptime:</span>
                <span className="bg-blue-200 px-2 py-1 rounded text-blue-800">
                  {Math.round((Date.now() - serverInfo.startTime) / 1000)} seconds
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">User List</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2 max-h-64 overflow-y-auto">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-200 px-3 py-2 rounded text-purple-800 hover:bg-purple-300 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
