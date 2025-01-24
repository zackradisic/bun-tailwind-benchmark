import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverUsers, setServerUsers] = useState([]);
  const [clientCounter, setClientCounter] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users');
      const users = await response.json();
      setServerUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ⚡️
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side Magic</h2>
            <ul className="space-y-2 text-white/80">
              {serverUsers.map((user, idx) => (
                <li key={idx} className="bg-white/10 rounded-md p-2 hover:bg-white/20 transition">
                  {user.name || 'Anonymous User'}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 rounded-xl p-6 transform transition-all hover:scale-105">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side Fun</h2>
            <div className="flex flex-col items-center space-y-4">
              <div className="text-6xl font-black text-white">
                {clientCounter}
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setClientCounter(c => c + 1)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition transform hover:scale-110"
                >
                  Increment
                </button>
                <button 
                  onClick={() => setClientCounter(c => c - 1)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition transform hover:scale-110"
                >
                  Decrement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white/50 text-sm text-center">
        Built with 🍞 Bun, React & TypeScript
      </div>
    </div>
  );
}
