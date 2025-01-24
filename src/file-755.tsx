import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl transform transition-all hover:scale-105 hover:shadow-3xl">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="text-sm text-gray-700 bg-blue-100 p-4 rounded-md overflow-x-auto">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <pre className="text-sm text-gray-700 bg-purple-100 p-4 rounded-md overflow-x-auto">
              {`const fetchUsers = async () => {
  const response = await fetch('/api/users');
  const userData = await response.json();
}`}
            </pre>
          </div>
        </div>
        
        <button 
          onClick={fetchUsers}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-bold transition-all duration-300 ${
            loading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
          }`}
        >
          {loading ? 'Fetching Users...' : 'Fetch Users 🚀'}
        </button>
        
        {users.length > 0 && (
          <div className="mt-6 bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              Users Fetched Successfully
            </h3>
            <ul className="space-y-2">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-green-100 p-2 rounded-md text-green-800 flex items-center space-x-2"
                >
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                  <span>{user}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        Built with 💖 using Bun, React & TypeScript
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
