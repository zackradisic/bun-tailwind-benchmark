import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-white drop-shadow-lg animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-lg border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Time</h2>
            <p className="text-xl text-blue-100 font-mono tracking-wider">
              {serverTime}
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-white/20 hover:border-white/50 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="text-lg text-blue-100 bg-white/5 p-2 rounded hover:bg-white/10 transition-all"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl p-6 w-full max-w-2xl text-center">
        <p className="text-white text-lg font-semibold">
          Built with 🚀 Bun + React + TypeScript
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <span className="px-4 py-2 bg-blue-500/50 text-white rounded-full">
            Server-Side
          </span>
          <span className="px-4 py-2 bg-green-500/50 text-white rounded-full">
            Client-Side
          </span>
        </div>
      </div>
    </div>
  );
}
