import React, { useState } from 'react';

export default function BunFullstackDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            onClick={fetchUsers}
            disabled={loading}
            className={`px-6 py-3 rounded-full font-bold tracking-wide transition-all duration-300 ${
              loading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1'
            }`}
          >
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>
        </div>

        {users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map(user => (
              <div 
                key={user.id} 
                className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 transform transition-all hover:scale-105 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-800">{user.name}</h3>
                <p className="text-sm text-blue-600">User ID: {user.id}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 mt-4">
        <p>Powered by <span className="font-bold text-blue-600">Bun</span> 🚀</p>
      </div>
    </div>
  );
}
