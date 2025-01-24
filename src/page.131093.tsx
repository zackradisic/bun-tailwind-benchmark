import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
          <h1 className="text-3xl font-bold text-white text-center tracking-wide">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <button 
              onClick={fetchUsers}
              disabled={loading}
              className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600'
              }`}
            >
              {loading ? 'Fetching...' : 'Load Users'}
            </button>
          </div>

          {users.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {users.map((user) => (
                <div 
                  key={user.id} 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-md transform transition-all hover:scale-105"
                >
                  <p className="text-lg font-medium text-blue-800">{user.name}</p>
                </div>
              ))}
            </div>
          )}

          {users.length === 0 && !loading && (
            <div className="text-center text-gray-500 italic">
              No users loaded. Click "Load Users" to fetch!
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-600 text-center">
        <p>Built with 🚀 Bun, React & TypeScript</p>
        <p className="text-xs">Fullstack made simple</p>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
