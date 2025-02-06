import "./style.css";
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch('/api/users');
        const userData = await userResponse.json();
        
        const timeResponse = await fetch('/api/time');
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Client Side</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                <p className="font-semibold text-gray-700">Framework: React + TypeScript</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                <p className="font-semibold text-gray-700">Styling: Tailwind CSS</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow-md">
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Server Side</h2>
            {loading ? (
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-purple-200 rounded"></div>
                <div className="h-6 bg-purple-200 rounded"></div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-700">Server Time: {serverTime}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="font-semibold text-gray-700">Users: {users.length}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transform transition-all shadow-lg hover:shadow-xl">
            Start Building
          </button>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
