import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center mb-4 tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="mr-2 text-green-600">🕒</span>
                  <span className="font-semibold">Server Time:</span>
                  <span className="ml-2 text-gray-700">
                    {loading ? 'Loading...' : serverTime}
                  </span>
                </p>
                <p className="flex items-center">
                  <span className="mr-2 text-purple-600">🚀</span>
                  <span className="font-semibold">Runtime:</span>
                  <span className="ml-2 text-gray-700">Bun v1.1</span>
                </p>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 shadow-md">
              <h2 className="text-2xl font-bold text-green-800 mb-4">User Data</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-green-300 rounded"></div>
                    <div className="h-4 bg-green-300 rounded"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span className="font-medium text-green-700">
                        {user.name} - {user.email}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 text-center">
          <p className="text-sm text-gray-600 italic">
            Built with ❤️ using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
