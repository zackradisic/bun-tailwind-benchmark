import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUsers(userData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-blue-600 mb-8">
          ⚡ Bun Fullstack Magic ⚡
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">🚀 Server Info</h2>
            <div className="space-y-4">
              <p className="text-lg">
                <span className="font-semibold text-blue-600">Current Time:</span> 
                <span className="ml-2 text-gray-700 font-mono">{serverTime}</span>
              </p>
              <div className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              <p className="text-sm text-gray-500 italic">
                Powered by Bun's lightning-fast server 🔥
              </p>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">👥 Users</h2>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {users.length === 0 ? (
                <p className="text-gray-500 animate-pulse">Loading users...</p>
              ) : (
                users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 font-light">
            Built with 💖 using Bun, React, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
