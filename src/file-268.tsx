import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);
        const userData = await usersResponse.json();
        const timeData = await timeResponse.json();
        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02] duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-6 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-semibold">Current Time:</span>
                <span className="bg-blue-100 px-3 py-1 rounded-full text-blue-800">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 font-semibold">Environment:</span>
                <span className="bg-green-100 px-3 py-1 rounded-full text-green-800">
                  Bun v1.1
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4">
                  <div className="h-4 bg-blue-200 rounded"></div>
                  <div className="h-4 bg-blue-200 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-medium text-blue-800">{user.name}</span>
                    <span className="text-blue-600 text-sm">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-blue-600 italic">
            Powered by Bun • React • TypeScript • Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
