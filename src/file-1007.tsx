import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-white text-center mb-8 tracking-tight animate-pulse">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Server Side</h2>
            <pre className="text-sm text-green-200 overflow-x-auto">
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

          <div className="bg-white/10 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
            <h2 className="text-2xl font-bold text-white mb-4">Client Side</h2>
            <pre className="text-sm text-blue-200 overflow-x-auto">
              {`function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
}`}
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">User List</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-2 text-white animate-bounce">
              <span>Loading users...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 p-4 rounded-lg shadow-md transform hover:scale-105 transition-all"
                >
                  <p className="text-white font-semibold">{user.name}</p>
                  <p className="text-blue-100 text-sm">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="text-white/70 text-sm text-center">
        Built with 💖 using Bun, React & TypeScript
      </footer>
    </div>
  );
}
