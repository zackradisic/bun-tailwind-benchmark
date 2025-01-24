import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/server-time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-white/80">Current Server Time:</p>
              <code className="block bg-blue-900/30 text-white/90 p-2 rounded-md text-sm">
                {serverTime || 'Loading...'}
              </code>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
            <ul className="space-y-2">
              {users.length === 0 ? (
                <li className="text-white/60 animate-pulse">Fetching users...</li>
              ) : (
                users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-blue-900/30 text-white/90 p-2 rounded-md text-sm flex justify-between hover:bg-blue-900/50 transition-colors"
                  >
                    <span>{user.name}</span>
                    <span className="text-white/60">ID: {user.id}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-white/70 flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
        <span className="text-sm">🚀 Powered by</span>
        <span className="font-bold text-white">Bun</span>
        <span className="text-sm">• React • TypeScript • Tailwind</span>
      </div>
    </div>
  );
}
