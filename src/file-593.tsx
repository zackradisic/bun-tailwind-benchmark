import "./style.css";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-4xl p-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-md text-sm overflow-x-auto">
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

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">Client</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="flex items-center justify-center animate-pulse">
                  <div className="h-8 w-8 bg-purple-300 rounded-full mr-3"></div>
                  <span className="text-purple-600">Loading users...</span>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-purple-100 p-3 rounded-lg flex justify-between items-center hover:bg-purple-200 transition-colors"
                    >
                      <span className="font-semibold text-purple-800">{user.name}</span>
                      <span className="text-sm text-purple-600">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-medium text-gray-600 flex items-center justify-center">
            <span className="mr-2">🚀</span>
            Built with Bun: Blazing Fast Full-Stack Development
            <span className="ml-2">⚡</span>
          </p>
        </div>
      </div>
    </div>
  );
}
