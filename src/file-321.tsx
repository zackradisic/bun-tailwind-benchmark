import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);

        const usersData = await usersResponse.json();
        const timeData = await timeResponse.json();

        setUsers(usersData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Server Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-lg">
                  Server Time: {serverTime || 'Loading...'}
                </p>
              </div>
              <div className="border-t border-white/20 my-4"></div>
              <p className="text-sm text-blue-100 italic">
                Powered by Bun's lightning-fast runtime
              </p>
            </div>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 text-white">
            <h2 className="text-2xl font-bold mb-4 text-blue-200">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <p>Fetching users...</p>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-white/10 rounded-lg p-3 flex items-center space-x-4 transform transition-all hover:scale-105 hover:bg-white/20"
                  >
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      {user.id}
                    </div>
                    <span className="text-lg">{user.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-white/80">
            Built with 🔥 React + TypeScript + Bun
          </p>
        </div>
      </div>
    </div>
  );
}
