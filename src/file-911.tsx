import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-md">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Server-Side Users</h2>
              <p className="text-gray-600">Fetched directly from database</p>
            </div>
            <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
              Bun.sql() Ready
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
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
                  className="bg-white border-2 border-blue-200 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                      {user.id}
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{user.name}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with ❤️ using Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
