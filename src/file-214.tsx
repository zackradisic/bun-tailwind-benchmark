import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [serverTime, setServerTime] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const userData = await usersResponse.json();
        setUsers(userData);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl space-y-8">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-4">
            🚀 Bun Fullstack Magic
          </h1>
          <p className="text-xl text-white/80 tracking-wide">
            Seamless Server & Client Integration
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-2xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              🕒 Server Time
            </h2>
            <p className="text-3xl font-mono text-emerald-300 tracking-widest">
              {serverTime || 'Fetching...'}
            </p>
          </div>

          <div className="bg-white/10 rounded-2xl p-6 transform transition-all hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              👥 Users
            </h2>
            <ul className="space-y-2">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <li 
                    key={index} 
                    className="text-lg text-cyan-200 bg-white/5 rounded-lg px-3 py-1 hover:bg-white/10 transition"
                  >
                    {user.name || 'Anonymous User'}
                  </li>
                ))
              ) : (
                <li className="text-gray-300 italic">Loading users...</li>
              )}
            </ul>
          </div>
        </div>

        <footer className="text-center mt-8">
          <div className="flex justify-center space-x-4">
            <a 
              href="https://bun.sh" 
              target="_blank" 
              className="bg-white/20 text-white px-6 py-3 rounded-full hover:bg-white/30 transition flex items-center space-x-2"
            >
              <span>Powered by Bun</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0s3.5 3.5 3.5 7.5S12 12 12 12s-3.5-1.5-3.5-4.5S12 0 12 0z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
