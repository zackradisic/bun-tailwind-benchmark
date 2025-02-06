import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const timeResponse = await fetch('/api/time');
        
        const userData = await userResponse.json();
        const timeData = await timeResponse.json();

        setUsers(userData);
        setServerTime(timeData.time);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl space-y-6 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Bun Fullstack Magic 🚀
          </h1>
          <p className="mt-2 text-gray-600 italic">Blazing fast development with Bun</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Details</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                Current Server Time: {serverTime}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {loading ? 'Loading Users...' : 'User List'}
            </h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-300 rounded w-3/4"></div>
                  <div className="h-4 bg-purple-300 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user) => (
                  <li 
                    key={user.id} 
                    className="bg-white p-2 rounded-md shadow-sm flex items-center hover:bg-purple-100 transition-colors"
                  >
                    <span className="w-8 h-8 bg-purple-200 rounded-full mr-3 flex items-center justify-center font-bold text-purple-600">
                      {user.id}
                    </span>
                    <span>{user.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="text-center mt-6">
          <div className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:from-green-500 hover:to-blue-600 transition-all">
            Built with Bun & React
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
