import "./style.css";
import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="flex justify-center">
            <button 
              onClick={fetchUsers}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>

          {users.length > 0 && (
            <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Users List
              </h2>
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white p-3 rounded-lg shadow-md flex items-center transform transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <span className="font-medium text-gray-800">{user.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 🚀 Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
