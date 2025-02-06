import "./style.css";
import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h1 className="text-5xl font-extrabold text-center text-white mb-6 tracking-tight drop-shadow-lg">
          Bun Fullstack Magic ✨
        </h1>
        <div className="flex space-x-4 justify-center mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`
              px-6 py-3 rounded-full font-bold transition-all duration-300
              ${loading 
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 active:scale-95'}
            `}
          >
            {loading ? 'Fetching...' : 'Load Users'}
          </button>
        </div>

        {users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
              <div 
                key={index} 
                className="
                  bg-white/30 backdrop-blur-sm rounded-xl p-4 
                  transform transition-all duration-300 
                  hover:scale-105 hover:shadow-lg
                  border border-white/20
                "
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {user.name}
                </h3>
                <p className="text-gray-700">{user.email}</p>
              </div>
            ))}
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center space-x-2 animate-pulse">
            <div className="w-4 h-4 bg-white/50 rounded-full"></div>
            <div className="w-4 h-4 bg-white/50 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        )}
      </div>

      <div className="text-center text-white/80 text-sm tracking-wide">
        Built with 🥟 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
