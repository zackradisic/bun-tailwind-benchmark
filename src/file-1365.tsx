import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Full-Stack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-blue-600">⏰</span>
                <span className="font-semibold">Server Time:</span>
                <span className="ml-2 text-blue-700">{serverTime || 'Loading...'}</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-blue-600">🚀</span>
                <span className="font-semibold">Runtime:</span>
                <span className="ml-2 text-blue-700">Bun.js</span>
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            <ul className="space-y-2">
              {users.length === 0 ? (
                <li className="text-gray-500 animate-pulse">Loading users...</li>
              ) : (
                users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white rounded-lg p-2 shadow-sm flex justify-between items-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="font-medium text-purple-700">{user.name}</span>
                    <span className="text-sm text-purple-500">{user.email}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block bg-green-100 border-2 border-green-300 rounded-full px-6 py-2 text-green-800 font-bold shadow-md hover:bg-green-200 transition-all">
            Built with Bun, React & TypeScript 🌟
          </div>
        </div>
      </div>
    </div>
  );
}
