import "./style.css";
import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              loading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg active:scale-95'
            }`}
          >
            {loading ? 'Fetching...' : 'Fetch Users'}
          </button>
        </div>

        {users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {users.map(user => (
              <div 
                key={user.id} 
                className="bg-gray-100 p-4 rounded-xl shadow-md hover:bg-blue-50 transition-colors"
              >
                <p className="font-semibold text-gray-800">ID: {user.id}</p>
                <p className="text-blue-600">{user.name}</p>
              </div>
            ))}
          </div>
        )}

        {!loading && users.length === 0 && (
          <p className="text-center text-gray-500 italic">
            No users fetched yet. Click "Fetch Users"
          </p>
        )}
      </div>

      <div className="text-sm text-gray-600 text-center max-w-xl">
        <p className="bg-white/50 backdrop-blur-sm p-4 rounded-xl">
          🚀 Built with Bun: Seamless fullstack development using TypeScript, 
          React, and server-side rendering in a single, lightning-fast runtime!
        </p>
      </div>
    </div>
  );
}
