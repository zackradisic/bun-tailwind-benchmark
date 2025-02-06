import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8">
          {loading && (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
            </div>
          )}

          {!loading && !error && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                User List
              </h2>
              <ul className="divide-y divide-gray-200">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="py-4 hover:bg-blue-50 transition-colors duration-200 rounded-lg px-4 flex items-center justify-between"
                  >
                    <span className="text-lg font-medium text-gray-700">{user.name}</span>
                    <span className="text-sm text-gray-500 bg-blue-100 px-2 py-1 rounded-full">
                      ID: {user.id}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 🚀 Bun, React, and ✨ Tailwind
        </div>
      </div>
    </div>
  );
}
