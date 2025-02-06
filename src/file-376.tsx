import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number, name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);

        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Playground 🚀
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Server Details</h2>
            <p className="text-blue-600 font-medium">
              Current Server Time: 
              <span className="ml-2 bg-blue-200 px-3 py-1 rounded-full text-blue-800">
                {serverTime || 'Loading...'}
              </span>
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-xl">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-bounce">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white shadow-md rounded-lg p-3 flex justify-between items-center transition-all duration-200 hover:bg-purple-100 hover:shadow-lg"
                  >
                    <span className="text-purple-800 font-semibold">{user.name}</span>
                    <span className="text-purple-500 text-sm">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-gray-600 italic">
          Built with Bun, React & TypeScript ⚡️
        </div>
      </div>
    </div>
  );
}
