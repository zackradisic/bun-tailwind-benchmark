import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);

        const userData = await usersResponse.json();
        const timeData = await timeResponse.json();

        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <span className="mr-2 text-blue-600">🕒</span>
                <span className="font-semibold">Server Time:</span>
                <span className="ml-2 text-gray-700">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </p>
              <div className="bg-blue-100 p-4 rounded-xl">
                <code className="text-sm text-blue-800">
                  Powered by Bun.serve() 🚀
                </code>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-200 rounded w-3/4"></div>
                  <div className="h-4 bg-purple-200 rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={user.id} 
                    className="bg-purple-100 p-3 rounded-xl flex justify-between items-center transform transition-all hover:scale-105 hover:bg-purple-200 duration-200"
                  >
                    <span className="font-medium text-purple-800">{user.name}</span>
                    <span className="text-sm text-purple-600">#{index + 1}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
