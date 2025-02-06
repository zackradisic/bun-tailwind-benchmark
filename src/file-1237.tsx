import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUserCount(userData.length);
      } catch (error) {
        console.error('Failed to fetch server data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-8 space-y-6 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Bun Fullstack Magic ✨
          </h1>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-blue-700 mb-2">Server Time</h2>
              <p className="text-2xl font-mono text-blue-900">{serverTime}</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-xl shadow-md">
              <h2 className="text-lg font-bold text-purple-700 mb-2">Active Users</h2>
              <p className="text-3xl font-bold text-purple-900">{userCount}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Bun: Blazing Fast Fullstack 🚀
            </h3>
            <p className="text-green-700">
              Server & Client seamlessly integrated with TypeScript, React, and Tailwind
            </p>
          </div>
          
          <div className="flex justify-center space-x-4">
            <a 
              href="https://bun.sh" 
              target="_blank" 
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <span>Learn Bun</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
