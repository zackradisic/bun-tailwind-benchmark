import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="p-8">
          <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="space-y-4">
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                {error}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {users.map((user) => (
                  <div 
                    key={user.id} 
                    className="bg-white/30 backdrop-blur-sm rounded-xl p-4 shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white/40"
                  >
                    <p className="font-semibold text-gray-800">
                      User {user.id}: {user.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        <div className="bg-white/10 p-4 text-center">
          <p className="text-sm text-white/70">
            Built with 🚀 Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
