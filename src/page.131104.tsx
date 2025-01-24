import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        const users = await userResponse.json();
        const timeData = await timeResponse.json();
        setUsers(users);
        setServerTime(timeData.time);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Info</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-blue-500">⏰</span>
                <span className="font-semibold">Current Server Time:</span>
                <span className="ml-2 text-blue-600">{serverTime}</span>
              </p>
              <div className="h-0.5 bg-blue-200 my-2"></div>
              <p className="flex items-center">
                <span className="mr-2 text-blue-500">💻</span>
                <span className="font-semibold">Runtime:</span>
                <span className="ml-2 text-blue-600">Bun</span>
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Users</h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-green-100 rounded-lg p-2 flex items-center transform transition-all hover:scale-105 hover:bg-green-200"
                >
                  <span className="mr-2 text-green-600">👤</span>
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-70">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
