import "./style.css";
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col space-y-4">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 ${
              loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? 'Fetching Users...' : 'Fetch Users from Server'}
          </button>

          {users.length > 0 && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg animate-fadeIn">
              <h2 className="text-xl font-semibold mb-4 text-blue-800">Users:</h2>
              <ul className="space-y-2">
                {users.map(user => (
                  <li 
                    key={user.id} 
                    className="bg-white shadow-sm rounded-md p-3 flex justify-between items-center hover:bg-blue-100 transition-colors"
                  >
                    <span className="font-medium text-blue-700">{user.name}</span>
                    <span className="text-sm text-blue-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70 hover:opacity-100 transition-opacity">
        Built with 🔥 Bun + React + TypeScript
      </div>
    </div>
  );
}
