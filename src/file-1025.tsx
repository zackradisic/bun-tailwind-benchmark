import "./style.css";
import React, { useState, useEffect } from 'react';

export default function FullstackBunApp() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          🚀 Bun Fullstack Magic
        </h1>

        {loading ? (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-white/50 rounded-full"></div>
            <div className="w-12 h-12 bg-white/50 rounded-full"></div>
            <div className="w-12 h-12 bg-white/50 rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user, index) => (
              <div 
                key={index} 
                className="bg-white/30 backdrop-blur-sm rounded-xl p-6 shadow-md transform hover:scale-110 transition-all duration-300 hover:rotate-3 hover:shadow-2xl"
              >
                <h2 className="text-2xl font-bold text-white mb-4 truncate">{user.name}</h2>
                <p className="text-white/80 text-sm">{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center text-white/70 text-sm flex items-center space-x-2">
        <span>⚡ Powered by</span>
        <span className="font-bold text-white">Bun</span>
        <span>• React • TypeScript • Tailwind</span>
      </div>
    </div>
  );
}
