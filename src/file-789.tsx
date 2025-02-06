import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.1.x',
    buildSpeed: 'Lightning Fast ⚡️'
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
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Speedrun 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Server Info</h2>
            <div className="space-y-2">
              {Object.entries(serverInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between">
                  <span className="font-medium text-gray-700 capitalize">{key}:</span>
                  <span className="font-bold text-blue-500">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Users</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-green-50 transition-colors"
                  >
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="text-sm text-green-600">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-blue-100 rounded-full px-6 py-3 inline-block text-sm font-bold text-blue-700 animate-bounce">
            Built with Bun: Zero Config, Maximum Performance! 💨
          </div>
        </div>
      </div>
    </div>
  );
}
