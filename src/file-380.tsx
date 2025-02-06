import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="px-6 py-8 sm:px-10">
          <h1 className="text-4xl font-extrabold text-center text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blue-600">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="space-y-4">
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-inner">
              <h2 className="text-2xl font-bold text-white mb-3">Server-Side Power</h2>
              <pre className="text-sm text-gray-200 overflow-x-auto">
                {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    const users = await Bun.sql\`SELECT * FROM users\`
    return Response.json(users)
  }
})`}
              </pre>
            </div>

            <div className="bg-white/10 rounded-xl p-4 border border-white/20 shadow-inner">
              <h2 className="text-2xl font-bold text-white mb-3">Client-Side Rendering</h2>
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce delay-150"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce delay-300"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-all duration-200 flex justify-between items-center"
                    >
                      <span className="text-white font-medium">{user.name}</span>
                      <span className="text-gray-300 text-sm">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
