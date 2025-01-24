import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex space-x-4 justify-center mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-pink-500 hover:bg-pink-600 text-white hover:shadow-lg transform hover:-translate-y-1'
            }`}
          >
            {loading ? 'Fetching...' : 'Load Users'}
          </button>
        </div>

        {loading && (
          <div className="flex justify-center items-center space-x-2 text-white">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
            <span>Loading...</span>
          </div>
        )}

        {users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div 
                key={user.id} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-sm text-gray-300">ID: {user.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center text-white/70 max-w-lg text-sm">
        <p className="italic">Built with Bun 🥟 - Seamlessly combining server & client magic!</p>
      </div>
    </div>
  );
}
