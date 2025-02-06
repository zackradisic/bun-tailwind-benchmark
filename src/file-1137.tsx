import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          🚀 Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>
                {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
              </code>
            </pre>
          </div>
          
          <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client-Side</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code>
                {`const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const userData = await response.json();
  setUsers(userData);
}`}
              </code>
            </pre>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            User List {loading && '⏳'}
          </h3>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <div 
                  key={index} 
                  className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transform hover:-translate-y-2 transition-all"
                >
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm">
        Built with ❤️ & 🥟 Bun
      </footer>
    </div>
  );
}
