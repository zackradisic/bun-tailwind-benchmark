import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.x',
    language: 'TypeScript'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-blue-600 text-white p-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <p className="mt-2 text-blue-100 font-medium">
            React + TypeScript + Bun = Rapid Development
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 p-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Server Details
            </h2>
            <ul className="space-y-2">
              {Object.entries(serverInfo).map(([key, value]) => (
                <li 
                  key={key} 
                  className="flex justify-between border-b border-blue-200 pb-1"
                >
                  <span className="font-semibold text-blue-700 capitalize">{key}:</span>
                  <span className="text-blue-900">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-4">
              Users {loading && '(Loading...)'}
            </h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-green-200 rounded"></div>
                  <div className="h-4 bg-green-200 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-green-100 rounded-md p-2 text-green-900 hover:bg-green-200 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 🚀 Bun - Ultrafast JavaScript Runtime
        </div>
      </div>
    </div>
  );
}
