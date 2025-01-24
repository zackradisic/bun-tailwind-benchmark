import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.0.0',
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-4 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">Server Info</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Runtime:</span>
                <span className="bg-indigo-200 px-2 py-1 rounded-full text-sm">
                  {serverInfo.runtime}
                </span>
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Version:</span>
                <span className="bg-purple-200 px-2 py-1 rounded-full text-sm">
                  {serverInfo.version}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Server Uptime: {Math.round((Date.now() - serverInfo.startTime) / 1000)} seconds
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Users</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex justify-between items-center"
                  >
                    <span className="font-medium text-gray-800">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 inline-block shadow-lg hover:shadow-xl"
          >
            Learn More About Bun
          </a>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
