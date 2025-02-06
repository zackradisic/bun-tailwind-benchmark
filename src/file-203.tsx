import "./style.css";
import React, { useState, useEffect } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Server Info Section */}
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="font-semibold">Runtime:</span>
                <span className="text-blue-600">{serverInfo.runtime}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Version:</span>
                <span className="text-blue-600">{serverInfo.version}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold">Uptime:</span>
                <span className="text-blue-600">
                  {((Date.now() - serverInfo.startTime) / 1000).toFixed(1)} seconds
                </span>
              </p>
            </div>
          </div>

          {/* Users Section */}
          <div className="bg-purple-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="font-medium text-purple-700">{user.name}</span>
                    <span className="text-sm text-purple-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🚀 Bun + React + TypeScript + Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
