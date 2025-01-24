import React, { useState } from 'react';

const FullstackBunDemo: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex justify-center mb-6">
          <button
            onClick={fetchUsers}
            disabled={loading}
            className="px-6 py-3 bg-white/30 text-white font-bold rounded-full hover:bg-white/50 transition-all duration-300 transform hover:scale-110 active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Fetching...' : 'Fetch Users'}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin w-12 h-12 border-4 border-white/50 border-t-white rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-white shadow-lg transform transition-all hover:scale-105 hover:rotate-3"
              >
                <p className="font-semibold truncate">{user}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-white/80 text-sm text-center max-w-xl">
        <p className="italic">
          Built with Bun 🥟 - Seamlessly combining server & client magic in one delightful fullstack experience!
        </p>
      </div>
    </div>
  );
};

export default FullstackBunDemo;
