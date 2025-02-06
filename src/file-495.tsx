import "./style.css";
import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="flex flex-col items-center space-y-4">
          <button 
            onClick={fetchUsers}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            {loading ? 'Loading...' : 'Fetch Users'}
          </button>

          {users.length > 0 && (
            <div className="w-full bg-gray-50 rounded-xl p-4 max-h-64 overflow-auto">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Users:</h2>
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white border border-gray-200 rounded-lg p-3 text-gray-800 hover:bg-blue-50 transition-colors"
                  >
                    {user}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm flex flex-col items-center space-y-2">
        <p className="bg-white/50 px-4 py-2 rounded-full">
          Built with 🍞 Bun, React & TypeScript
        </p>
        <div className="flex space-x-2">
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Server-Side</span>
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full">Client-Side</span>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
