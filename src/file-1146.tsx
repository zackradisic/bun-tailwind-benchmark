import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [userCount, setUserCount] = useState<number>(0);

  useEffect(() => {
    async function fetchServerData() {
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
    }

    fetchServerData();
    const intervalId = setInterval(fetchServerData, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:bg-blue-100 transition-colors">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Stats</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-semibold text-blue-900">Current Server Time: {serverTime}</span>
              </div>
              <div className="flex items-center space-x-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.5 17c0-2.76-2.69-5-6-5s-6 2.24-6 5v2h12v-2zM16 17v2a2 2 0 01-2 2h-4v-2a2 2 0 00-2-2H4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2v-2z" />
                </svg>
                <span className="text-lg font-semibold text-blue-900">Total Users: {userCount}</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:bg-purple-100 transition-colors">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Features</h2>
            <ul className="space-y-3 text-purple-900">
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Real-time Data Sync</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Periodic Server Updates</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Responsive Design</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-xl font-medium text-gray-700">
            Built with 🚀 Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
}
