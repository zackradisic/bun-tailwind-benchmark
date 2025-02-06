import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<string[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData.users);
      } catch (error) {
        console.error('Fetching data failed', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight">
            ⚡️ Bun Fullstack Magic ⚡️
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
              <div className="space-y-2">
                <p className="text-lg">
                  <span className="font-semibold text-blue-600">Current Time:</span>
                  <span className="ml-2 text-gray-700">{serverTime || 'Loading...'}</span>
                </p>
                <div className="w-full h-1 bg-blue-200 rounded-full"></div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">User List</h2>
              <ul className="space-y-2">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white px-4 py-2 rounded-lg shadow-sm text-purple-700 hover:bg-purple-100 transition-colors"
                    >
                      {user}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500 italic">No users found</li>
                )}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-sm text-gray-600">
              Built with 🔥 Bun, React & TypeScript
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-4">
        <p className="text-xs">
          🚀 Fullstack development made ridiculously simple
        </p>
      </div>
    </div>
  );
}
