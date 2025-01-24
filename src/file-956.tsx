import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-blue-100 mt-2 text-lg font-medium">
            React + TypeScript + Bun = Lightning Fast Development
          </p>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-bounce">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-4 border-blue-500 pb-2">
                User List
              </h2>
              <ul className="space-y-3">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-blue-50 p-4 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 flex items-center space-x-4"
                  >
                    <span className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {user.id}
                    </span>
                    <span className="text-lg font-medium text-gray-700">
                      {user.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 🚀 Bun v1.1 - Fullstack Simplicity
          </p>
        </div>
      </div>
    </div>
  );
}
