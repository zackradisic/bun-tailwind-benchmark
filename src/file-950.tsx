import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
              {`Bun.serve({
  static: { "/": homepage },
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">⚛️ Client-Side</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm text-purple-900">
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

        <div className="mt-8 bg-gray-100 p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users Retrieved 👥
          </h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
              <p className="text-xl text-gray-600">Loading...</p>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-blue-50 transition-colors text-center"
                >
                  {user}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        Built with 💖 using{' '}
        <span className="font-bold text-blue-600">Bun</span>,{' '}
        <span className="font-bold text-purple-600">React</span>, and{' '}
        <span className="font-bold text-teal-600">TypeScript</span>
      </div>
    </div>
  );
}
