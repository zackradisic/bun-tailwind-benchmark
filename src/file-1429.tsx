import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl border-4 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
            <pre className="bg-blue-100 rounded-lg p-4 text-sm text-blue-800">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith('/api/users')) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-2xl border-4 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client-Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-purple-100 px-4 py-2 rounded-lg text-purple-800 font-medium transform hover:translate-x-2 transition-transform"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-110 transition-transform">
            Built with Bun 🚀
          </div>
        </div>
      </div>
    </div>
  );
}
