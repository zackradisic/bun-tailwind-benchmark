import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        
        const userData = await userResponse.json();
        const timeData = await timeResponse.json();

        setUsers(userData);
        setServerTime(timeData.time);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="text-lg font-medium text-blue-600">
                Current Server Time: 
                <span className="ml-2 text-blue-900 font-bold">{serverTime}</span>
              </p>
              <div className="h-1 bg-blue-200 rounded w-full"></div>
              <p className="text-sm text-blue-500">
                Powered by Bun's lightning-fast runtime
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-purple-100 p-2 rounded-lg text-purple-700 hover:bg-purple-200 transition-colors"
                >
                  {user.name || 'Anonymous User'}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, and TypeScript in a single, blazing-fast fullstack application
          </p>
        </div>
      </div>
    </div>
  );
}
