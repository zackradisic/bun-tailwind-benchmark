import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

export default function BunFullstackshowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex space-x-4 justify-center mb-6">
          <button
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full text-white font-bold transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95'
            }`}
          >
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>
        </div>

        {users.length > 0 && (
          <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Users Retrieved
            </h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors flex justify-between items-center"
                >
                  <span className="font-medium text-gray-700">{user.name}</span>
                  <span className="text-sm text-gray-500">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-600 opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}

// Client-side rendering
if (typeof window !== 'undefined') {
  const root = createRoot(document.getElementById('root')!);
  root.render(<BunFullstackshowcase />);
}
