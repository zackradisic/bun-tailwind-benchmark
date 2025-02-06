import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackShowcase: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUserCount(userData.length);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 space-y-4 hover:bg-blue-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-700">Server Time</h2>
            <p className="text-3xl font-mono text-blue-600 animate-pulse">{serverTime}</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 space-y-4 hover:bg-purple-100 transition-colors">
            <h2 className="text-2xl font-bold text-purple-700">User Count</h2>
            <p className="text-4xl font-bold text-purple-600">{userCount}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all transform hover:-translate-y-1">
            Built with Bun 🚀
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 text-center max-w-xl">
        A fullstack app demonstrating Bun's incredible simplicity: 
        TypeScript frontend, server-side API, and seamless bundling in one lightning-fast runtime.
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
