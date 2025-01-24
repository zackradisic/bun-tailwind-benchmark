import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
              <div className="h-4 bg-purple-300 rounded w-3/4"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              {error}
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
              <ul className="divide-y divide-purple-200">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="py-4 px-2 hover:bg-purple-50 transition-colors rounded-lg flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{user.id}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 💜 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
