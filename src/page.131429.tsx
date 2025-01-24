import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.json();
        setServerTime(timeData.time);

        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-[1.02] duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          ⚡ Bun Fullstack Magic
        </h1>

        {loading ? (
          <div className="flex justify-center items-center space-x-4 animate-pulse">
            <div className="h-12 w-12 bg-blue-300 rounded-full"></div>
            <div className="h-6 w-48 bg-blue-200 rounded"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold text-blue-700 mb-4">🕒 Server Time</h2>
                <p className="text-xl text-blue-900">{serverTime}</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold text-purple-700 mb-4">👥 User List</h2>
                <ul className="space-y-2">
                  {users.map((user, index) => (
                    <li 
                      key={index} 
                      className="bg-white p-3 rounded-lg shadow-sm hover:bg-purple-100 transition-colors"
                    >
                      {user.name} - {user.email}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="text-center text-sm text-blue-600 opacity-70">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
}
