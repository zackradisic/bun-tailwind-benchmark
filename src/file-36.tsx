import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-blue-700 mb-2">Server Details</h2>
              <p className="text-sm text-gray-600">
                Current Server Time: 
                <span className="font-mono ml-2 text-green-600">
                  {serverTime || 'Loading...'}
                </span>
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-700 mb-2">Client Rendering</h2>
              <p className="text-sm text-gray-600">
                React Component Loaded: 
                <span className="text-green-600 ml-2">✓</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Users</h3>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-gray-100 p-3 rounded-lg flex items-center justify-between hover:bg-gray-200 transition-colors"
                  >
                    <span className="font-medium text-gray-800">{user.name}</span>
                    <span className="text-sm text-gray-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-xs text-gray-500">
            Built with 🚀 Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
}
