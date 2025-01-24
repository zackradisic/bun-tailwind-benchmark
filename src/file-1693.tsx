import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackshowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const serverTimeData = await timeResponse.text();
        setServerTime(serverTimeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/30 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">Server Time</h2>
            <p className="text-white font-mono text-2xl">{serverTime || 'Loading...'}</p>
          </div>
          
          <div className="bg-white/30 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-white mb-2">Total Users</h2>
            <p className="text-white font-mono text-2xl">{users.length}</p>
          </div>
        </div>

        <div className="bg-white/30 rounded-xl p-4 max-h-64 overflow-auto">
          <h2 className="text-xl font-bold text-white mb-4">User List</h2>
          {users.length === 0 ? (
            <div className="text-white animate-pulse">Fetching users...</div>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white/20 p-2 rounded-lg text-white hover:bg-white/40 transition-colors"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-white text-sm opacity-70 text-center">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
}

// Client-side rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackshowcase />);
});
