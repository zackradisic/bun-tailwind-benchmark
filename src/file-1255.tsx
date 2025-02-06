import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          ⚡ Bun Fullstack Magic
        </h1>

        {loading ? (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
            <div className="w-12 h-12 bg-purple-300 rounded-full"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Time</h2>
                <p className="text-3xl font-mono text-blue-900">{serverTime}</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-purple-700">Users</h2>
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                    >
                      {user.name || 'Anonymous User'}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-600 transition-all">
                🚀 Bun Makes Fullstack Simple!
              </div>
            </div>
          </>
        )}
      </div>

      <div className="text-sm text-gray-600 text-center max-w-xl">
        Built with Bun, React, TypeScript & Tailwind
        <div className="mt-2 flex justify-center space-x-2">
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-ping"></div>
          <div className="h-2 w-2 bg-purple-500 rounded-full animate-ping delay-100"></div>
          <div className="h-2 w-2 bg-green-500 rounded-full animate-ping delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
