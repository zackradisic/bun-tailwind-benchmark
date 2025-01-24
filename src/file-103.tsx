import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-cyan-400 to-blue-500 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight uppercase">
            Bun Fullstack Magic ✨
          </h1>
          <p className="mt-2 text-white/80 text-lg">
            Blazing Fast React + TypeScript + Server
          </p>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                User List ({users.length} users)
              </h2>
              <ul className="divide-y divide-gray-200 border border-gray-100 rounded-lg">
                {users.map((user, index) => (
                  <li 
                    key={user.id || index} 
                    className="p-4 hover:bg-gray-50 transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <p className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
                        {user.name}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      Active
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-6 text-center">
          <div className="flex justify-center space-x-4">
            <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="h-2 w-2 bg-green-500 rounded-full animate-bounce delay-150"></div>
            <div className="h-2 w-2 bg-red-500 rounded-full animate-bounce delay-300"></div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Built with Bun • React • TypeScript • Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
