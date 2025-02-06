import "./style.css";
import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverMessage, setServerMessage] = useState<string>('');
  const [userData, setUserData] = useState<any[]>([]);

  const fetchServerData = async () => {
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setServerMessage(data.message);
    } catch (error) {
      console.error('Error fetching server data', error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users');
      const users = await response.json();
      setUserData(users);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-4xl">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              <button 
                onClick={fetchServerData}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Fetch Server Message
              </button>
              {serverMessage && (
                <div className="bg-blue-100 p-3 rounded-lg text-blue-800">
                  {serverMessage}
                </div>
              )}
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Server Data</h2>
            <div className="space-y-4">
              <button 
                onClick={fetchUsers}
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Load Users
              </button>
              {userData.length > 0 && (
                <div className="max-h-48 overflow-y-auto">
                  {userData.map((user, index) => (
                    <div 
                      key={index} 
                      className="bg-purple-100 p-2 mb-2 rounded-lg text-purple-800 last:mb-0"
                    >
                      {user.name} - {user.email}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Built with 🍞 Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
