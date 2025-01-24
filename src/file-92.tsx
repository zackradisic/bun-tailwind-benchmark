import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Lightning-fast fullstack development with React, TypeScript, and Bun
          </p>
        </div>

        <div className="bg-white/10 p-6 rounded-b-3xl">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              <div className="w-64 h-6 bg-white/30 rounded"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white mb-4">
                Users Fetched from Backend 🚀
              </h2>
              <ul className="divide-y divide-white/20">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="py-3 px-4 hover:bg-white/10 transition-colors duration-300 flex items-center space-x-4"
                  >
                    <span className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                      {user.id}
                    </span>
                    <span className="text-white font-medium">
                      {user.name || 'Anonymous User'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white/70 text-sm flex items-center justify-center space-x-2">
          <span>⚡ Built with</span>
          <span className="font-bold bg-white/20 px-3 py-1 rounded-full">
            Bun
          </span>
          <span>+</span>
          <span className="font-bold bg-white/20 px-3 py-1 rounded-full">
            React
          </span>
          <span>+</span>
          <span className="font-bold bg-white/20 px-3 py-1 rounded-full">
            TypeScript
          </span>
        </p>
      </div>
    </div>
  );
}
