import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight drop-shadow-lg">
            🚀 Bun Fullstack Magic
          </h1>
          <p className="mt-2 text-blue-100 text-lg font-medium">
            Blazing Fast React + TypeScript + Server
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Server-Side 🖥️
              </h2>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Client-Side 💻
              </h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-purple-300 rounded w-3/4"></div>
                      <div className="h-4 bg-purple-300 rounded w-1/2"></div>
                    </div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map((user) => (
                      <li 
                        key={user.id} 
                        className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                      >
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">
              React ⚛️
            </span>
            <span className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold">
              TypeScript 📘
            </span>
            <span className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-semibold">
              Bun 🥣
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
