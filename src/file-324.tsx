import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<Array<{ id: number; name: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="p-8 space-y-6">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-center mb-8">
            Bun Fullstack Magic ✨
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Server-Side</h2>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Client-Side</h2>
              {loading ? (
                <div className="flex justify-center items-center space-x-3 animate-pulse">
                  <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 font-semibold">{error}</div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user) => (
                    <li 
                      key={user.id} 
                      className="bg-blue-100 p-3 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-1 rounded-full animate-pulse">
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-all">
                Build Fullstack Apps with Bun 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
