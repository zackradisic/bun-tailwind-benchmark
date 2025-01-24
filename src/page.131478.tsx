import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverStatus, setServerStatus] = useState('Initializing...');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setServerStatus('Connected Successfully!');
        setLoading(false);
      } catch (error) {
        setServerStatus('Connection Failed');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-4xl w-full transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-8 animate-pulse">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/20 p-6 rounded-xl border border-white/10 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server Status</h2>
            <p className={`text-xl font-semibold ${serverStatus.includes('Successfully') ? 'text-green-400' : 'text-red-400'}`}>
              {serverStatus}
            </p>
          </div>

          <div className="bg-white/20 p-6 rounded-xl border border-white/10 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">User Data</h2>
            {loading ? (
              <div className="flex items-center justify-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="text-white bg-white/10 p-2 rounded hover:bg-white/20 transition-colors"
                  >
                    {user.name || 'Anonymous User'}
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
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-600 transition-colors transform hover:scale-110"
          >
            Learn More About Bun
          </a>
        </div>
      </div>

      <footer className="text-white/50 text-sm text-center">
        Built with ❤️ using Bun, React & TypeScript
      </footer>
    </div>
  );
};

export default BunFullstackShowcase;
