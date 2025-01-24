import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-800 to-blue-900 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-500/20 rounded-xl p-6 hover:bg-blue-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Server Details</h2>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <p className="text-blue-100 font-semibold">
                  Server Time: 
                  <span className="ml-2 text-blue-300">
                    {loading ? 'Loading...' : serverTime}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-6 hover:bg-purple-500/30 transition-colors">
            <h2 className="text-2xl font-bold text-purple-200 mb-4">Users</h2>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-purple-400 rounded w-3/4"></div>
                    <div className="h-4 bg-purple-400 rounded"></div>
                  </div>
                </div>
              ) : (
                users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 p-3 rounded-lg transform transition-all hover:scale-105 hover:bg-white/20"
                  >
                    <p className="text-purple-100 font-medium">
                      {user.name} - {user.email}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-white/50 text-sm flex items-center space-x-2 justify-center">
        <span>🚀 Built with</span>
        <span className="font-bold text-white/80">Bun</span>
        <span>+</span>
        <span className="font-bold text-white/80">React</span>
        <span>+</span>
        <span className="font-bold text-white/80">TypeScript</span>
      </div>
    </div>
  );
}
