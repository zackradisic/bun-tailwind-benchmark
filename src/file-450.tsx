import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const serverTimeData = await timeResponse.json();
        setServerTime(serverTimeData.time);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center mb-6">
          Bun Fullstack Magic 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Server Details</h2>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2 text-green-500">⚡</span>
                <span className="font-semibold">Server Time:</span>
                <span className="ml-2 text-blue-600">
                  {loading ? 'Loading...' : serverTime}
                </span>
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-700">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 italic">
            Built with Bun, React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
