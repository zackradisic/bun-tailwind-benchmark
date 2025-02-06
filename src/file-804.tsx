import "./style.css";
import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const userData = await response.json();
      setUsers(userData);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 w-full max-w-4xl transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-400 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Server-Side</h2>
            <pre className="text-sm text-gray-200 bg-black/30 p-4 rounded-lg">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Client-Side</h2>
            <button 
              onClick={fetchUsers}
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 mb-4 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
            
            {users.length > 0 && (
              <div className="space-y-2 max-h-64 overflow-y-auto bg-black/20 rounded-lg p-4">
                {users.map((user, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 p-2 rounded text-white hover:bg-white/20 transition-all"
                  >
                    {user}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-white/80 text-sm flex space-x-4">
        <span>🚀 Built with Bun</span>
        <span>⚡ Powered by React</span>
        <span>🎨 Styled with Tailwind</span>
      </div>
    </div>
  );
};

export default BunFullstackDemo;
