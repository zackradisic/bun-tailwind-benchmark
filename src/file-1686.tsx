import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-10 transform transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 mb-8 animate-pulse">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-2xl p-6 shadow-md border-4 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server-Side</h2>
            <pre className="bg-gray-200 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-md border-4 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client-Side</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-blue-100 p-3 rounded-lg flex justify-between items-center hover:bg-blue-200 transition-colors"
                  >
                    <span className="font-medium text-blue-800">{user.name}</span>
                    <span className="text-sm text-blue-600">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-700 animate-bounce">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
