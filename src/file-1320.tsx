import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const userData = await response.json();
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all duration-500 hover:scale-105">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-xl border-2 border-indigo-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                Server-Side Power 💻
              </h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Client-Side Rendering 🚀
              </h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="flex justify-center items-center space-x-2 animate-pulse">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {users.map((user, index) => (
                      <li 
                        key={index} 
                        className="bg-white p-3 rounded-lg shadow-sm transform transition-all hover:scale-105 hover:bg-indigo-50"
                      >
                        {user.name || 'Anonymous User'}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with ❤️ using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
