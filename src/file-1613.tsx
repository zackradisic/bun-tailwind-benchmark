import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        
        const timeResponse = await fetch('/api/server-time');
        const timeData = await timeResponse.json();
        
        setUsers(userData);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
            <h2 className="text-2xl font-bold text-blue-800 mb-2">Server Insights</h2>
            <p className="text-blue-600">
              Server Time: 
              <span className="font-mono ml-2 bg-blue-100 px-2 py-1 rounded">
                {serverTime || 'Loading...'}
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-purple-800">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-bounce">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 bg-white rounded-lg shadow-md overflow-hidden">
                {users.map((user, index) => (
                  <li 
                    key={user.id} 
                    className={`px-6 py-4 hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                      <span className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {user.role}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 flex items-center justify-center">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Built with Bun & React - Seamless Fullstack Development
          </p>
        </div>
      </div>
    </div>
  );
}
