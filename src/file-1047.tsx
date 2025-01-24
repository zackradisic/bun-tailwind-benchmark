import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            Bun Fullstack Demo 🚀
          </h1>
        </div>
        
        <div className="p-8">
          {loading ? (
            <div className="flex justify-center items-center space-x-4 animate-pulse">
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
              <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {users.map((user, index) => (
                <div 
                  key={user.id || index} 
                  className="bg-gradient-to-tr from-blue-50 to-purple-100 rounded-xl p-6 shadow-md transform transition hover:scale-105 hover:shadow-xl"
                >
                  <h2 className="text-2xl font-bold text-blue-800 mb-2">
                    {user.name || 'Unknown User'}
                  </h2>
                  <p className="text-purple-600 font-semibold">
                    {user.email || 'No email'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 font-medium">
            Built with 💖 using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
