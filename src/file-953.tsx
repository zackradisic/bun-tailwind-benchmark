import React, { useState } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
      <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-white mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex space-x-4 mb-6 justify-center">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
              loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-green-500 hover:bg-green-600 text-white hover:shadow-lg'
            }`}
          >
            {loading ? 'Fetching...' : 'Fetch Users'}
          </button>
        </div>

        <div className="bg-white/10 rounded-xl p-6 min-h-[200px] border border-white/20">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
            </div>
          ) : users.length === 0 ? (
            <p className="text-center text-white/50">No users fetched yet</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all cursor-pointer"
                >
                  <p className="text-white font-semibold">ID: {user.id}</p>
                  <p className="text-white/80">{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-white/60 text-sm">
          Built with 🔥 Bun, React & Tailwind
        </div>
      </div>
    </div>
  );
}
