import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [serverTime, setServerTime] = useState<string>('Loading...');
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time');
        const timeData = await timeResponse.text();
        setServerTime(timeData);

        const usersResponse = await fetch('/api/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center space-y-8 p-6 antialiased">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/30 p-8 max-w-2xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white/10 rounded-xl p-4 shadow-inner">
            <h2 className="text-xl font-bold text-white mb-3">Server Time</h2>
            <p className="text-2xl font-mono text-green-400 tracking-wider">
              {serverTime}
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 shadow-inner">
            <h2 className="text-xl font-bold text-white mb-3">Users</h2>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="text-white bg-white/5 rounded-lg px-3 py-1 hover:bg-white/10 transition-all"
                >
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="bg-white/20 px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:bg-white/30 transition-all cursor-pointer">
            React
          </div>
          <div className="bg-white/20 px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:bg-white/30 transition-all cursor-pointer">
            TypeScript
          </div>
          <div className="bg-white/20 px-6 py-2 rounded-full text-white font-semibold shadow-lg hover:bg-white/30 transition-all cursor-pointer">
            Bun
          </div>
        </div>
      </div>
      
      <div className="text-white/70 text-sm text-center max-w-xl">
        Seamlessly integrating server and client with Bun's powerful fullstack capabilities, 
        bringing type-safety, performance, and developer experience to new heights.
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
