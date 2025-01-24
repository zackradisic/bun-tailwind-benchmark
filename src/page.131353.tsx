import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/server-time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/user-count');
        const userData = await usersResponse.json();
        setUserCount(userData.count);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
    const interval = setInterval(fetchServerData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic 🚀
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 text-center shadow-md hover:bg-blue-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Time</h2>
            <p className="text-3xl font-mono text-blue-600">{serverTime}</p>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-6 text-center shadow-md hover:bg-purple-100 transition-colors">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Active Users</h2>
            <p className="text-4xl font-bold text-purple-600">{userCount}</p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:from-green-500 hover:to-blue-600 transition-all">
            Real-time Fullstack with Bun
          </div>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 text-center max-w-xl">
        This demo showcases Bun's incredible ability to build fullstack applications with seamless server-client communication, 
        type-safe TypeScript, and beautiful Tailwind styling.
      </div>
    </div>
  );
}
