import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight animate-pulse">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">Client-Side</h2>
            <div className="space-y-2">
              <p className="text-white/80">React Component</p>
              <p className="text-white/80">Dynamic State Management</p>
              <p className="text-white/80">Tailwind Styling</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4">Server-Side</h2>
            <div className="space-y-2">
              <p className="text-white/80">Bun HTTP Server</p>
              <p className="text-white/80">API Routing</p>
              <p className="text-white/80">Database Integration</p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white/10 rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-4">Users</h2>
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
              <p className="text-white">Loading...</p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white/20 rounded-lg p-4 text-white hover:bg-white/30 transition-all duration-300"
                >
                  {user.name || 'Anonymous User'}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-white/50 text-sm">
        Built with Bun, React, TypeScript & Tailwind
      </div>
    </div>
  );
}
