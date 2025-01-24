import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ]);
        const usersData = await usersResponse.json();
        const timeData = await timeResponse.json();
        
        setUsers(usersData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Fetching data failed', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            🚀 Bun Fullstack Magic
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-5 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                Server Details ⚙️
              </h2>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-semibold">Current Time:</span> 
                  <span className="ml-2 bg-blue-100 px-2 py-1 rounded text-blue-800">
                    {serverTime || 'Loading...'}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-green-50 p-5 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Users Data 👥
              </h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-green-200 rounded"></div>
                    <div className="h-4 bg-green-200 rounded"></div>
                  </div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-green-100 px-3 py-2 rounded text-green-800 transform hover:scale-105 transition-transform"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 text-center border-t">
          <p className="text-sm text-gray-600 italic">
            Built with ❤️ using Bun, React & TypeScript
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
