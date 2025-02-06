import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [serverTime, setServerTime] = useState<string | null>(null);
  const [apiData, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setApiData(userData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-green-600">⏰</span>
                <span className="font-semibold">Current Server Time:</span>
              </p>
              <code className="bg-indigo-100 p-2 rounded-md block text-sm">
                {serverTime || 'Loading...'}
              </code>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">API Data</h2>
            <div className="max-h-48 overflow-y-auto">
              {apiData.length === 0 ? (
                <p className="text-gray-500 italic">No users found</p>
              ) : (
                <ul className="space-y-2">
                  {apiData.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-blue-100 p-2 rounded-md text-sm flex justify-between hover:bg-blue-200 transition-colors"
                    >
                      <span>{user.name}</span>
                      <span className="text-blue-700">{user.email}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with 🚀 Bun, React, and Tailwind CSS
          </p>
        </div>
      </div>

      <div className="text-xs text-gray-500 text-center">
        Demonstrating seamless fullstack development with Bun
      </div>
    </div>
  );
}
