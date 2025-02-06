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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <p className="text-white/80 mt-2 text-lg">
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                User Directory
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <div 
                    key={user.id || index} 
                    className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
                  >
                    <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <div className="flex justify-center space-x-4">
            <span className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full text-sm">
              🚀 Bun {process.versions.bun}
            </span>
            <span className="inline-block px-4 py-2 bg-purple-500 text-white rounded-full text-sm">
              ⚛️ React 18
            </span>
            <span className="inline-block px-4 py-2 bg-pink-500 text-white rounded-full text-sm">
              🌈 TypeScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Client-side rendering for browser
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackShowcase />);
}
