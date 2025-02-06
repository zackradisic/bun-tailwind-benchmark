import "./style.css";
import React, { useState } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex space-x-4 justify-center mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              loading 
                ? 'bg-gray-300 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600 active:scale-95 shadow-lg hover:shadow-xl'
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
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200 flex items-center space-x-4"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.id}
                </div>
                <span className="text-lg font-semibold text-gray-800">{user.name}</span>
              </div>
            ))}
          </div>
        )}

        {!loading && users.length === 0 && (
          <p className="text-center text-gray-500 italic">
            No users fetched yet. Click "Fetch Users" to load data!
          </p>
        )}
      </div>

      <div className="text-center text-sm text-gray-600 flex flex-col items-center space-y-2">
        <div className="bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 shadow-md">
          🚀 Built with Bun, React & TypeScript
        </div>
        <div className="opacity-70">
          Server + Client in one seamless experience
        </div>
      </div>
    </div>
  );
}
