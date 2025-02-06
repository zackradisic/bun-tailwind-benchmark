import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({ 
    runtime: 'Bun', 
    version: 'v1.1.44', 
    status: 'blazing fast ⚡️' 
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <div className="space-y-3">
              {Object.entries(serverInfo).map(([key, value]) => (
                <div key={key} className="flex justify-between bg-white p-3 rounded-lg shadow-sm">
                  <span className="font-semibold text-gray-600 capitalize">{key}:</span>
                  <span className="text-blue-600 font-bold">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Users List</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-3 animate-pulse">
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between hover:bg-green-100 transition-colors"
                  >
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="text-green-600 font-bold">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🔥 Bun, TypeScript, React, and Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
