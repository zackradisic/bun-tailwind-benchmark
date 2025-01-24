import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="space-y-4">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl shadow-md">
            <span className="text-lg font-semibold text-gray-700">Server Status</span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              Connected ✅
            </span>
          </div>

          <div className="bg-gray-50 border-2 border-indigo-100 rounded-2xl p-4">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">User List</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
                <div className="w-4 h-4 bg-indigo-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white border border-gray-200 rounded-lg p-3 hover:bg-indigo-50 transition-colors flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="text-sm text-gray-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}

// Client-side rendering
document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackDemo />);
});
