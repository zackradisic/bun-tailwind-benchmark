import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.1.0',
    startTime: Date.now()
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Details</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Runtime:</span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                    {serverInfo.runtime}
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="font-semibold mr-2">Version:</span>
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">
                    {serverInfo.version}
                  </span>
                </li>
                <li>
                  <span className="font-semibold">Uptime:</span>{' '}
                  {((Date.now() - serverInfo.startTime) / 1000).toFixed(2)} seconds
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Client State</h2>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Users Loaded:</span>
                  <span className={`px-2 py-1 rounded-full text-sm ${loading ? 'bg-yellow-200 text-yellow-800' : 'bg-green-200 text-green-800'}`}>
                    {loading ? 'Loading...' : users.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <div className="bg-gray-200 p-4 font-semibold text-gray-700">
              User List
            </div>
            {loading ? (
              <div className="p-6 text-center text-gray-500 animate-pulse">
                Fetching users from server...
              </div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="p-4 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm">
        Built with 🥟 Bun + React + TypeScript
      </div>
    </div>
  );
};

export default BunFullstackDemo;
