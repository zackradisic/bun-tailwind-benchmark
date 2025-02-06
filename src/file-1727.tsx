import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Setup</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-lg overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client React</h2>
            <pre className="text-sm text-gray-700 bg-purple-100 p-4 rounded-lg overflow-x-auto">
              {`const App = () => {
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

        <div className="mt-8 bg-gray-50 rounded-xl p-6 shadow-inner">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users List
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-2"
                >
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">ID: {user.id}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <footer className="text-sm text-gray-600 text-center opacity-75">
        Built with 🚀 Bun, React & TypeScript
      </footer>
    </div>
  );
}
