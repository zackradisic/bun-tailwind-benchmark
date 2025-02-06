import "./style.css";
import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>

        <div className="flex flex-col space-y-4">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`
              w-full py-3 rounded-xl font-bold text-white transition-all duration-300
              ${loading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 active:scale-95'}
            `}
          >
            {loading ? 'Fetching Users...' : 'Fetch Users'}
          </button>

          <div className="bg-gray-100 rounded-xl p-4 min-h-[200px]">
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : users.length > 0 ? (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-blue-50 transition"
                  >
                    <span className="font-semibold text-gray-800">{user.name}</span>
                    <span className="text-sm text-gray-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500">No users fetched yet</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-white text-sm text-center opacity-70">
        Built with 🚀 Bun, React, and ✨ Tailwind
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
