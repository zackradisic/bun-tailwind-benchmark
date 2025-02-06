import "./style.css";
import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex items-center justify-center mb-6">
          <button 
            onClick={fetchUsers}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-90 shadow-lg"
          >
            {loading ? 'Fetching...' : 'Load Users'}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-white"></div>
            <p className="text-white">Loading users...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div 
                key={user.id} 
                className="bg-white/30 backdrop-blur-md rounded-xl p-4 text-center transform transition-all hover:scale-105 hover:shadow-xl"
              >
                <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                <p className="text-white/70">User ID: {user.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center text-white/80 max-w-xl">
        <p className="text-sm italic">
          Built with Bun 🥟 | Fullstack React + TypeScript | Seamless Server & Client Integration
        </p>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
