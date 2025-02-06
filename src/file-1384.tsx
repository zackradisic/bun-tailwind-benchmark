import "./style.css";
import React, { useState, useEffect } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch users', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
          <p className="mt-4 text-blue-100 text-lg">
            React + TypeScript + Bun = Blazing Fast Development
          </p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Server-Side
              </h2>
              <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900 overflow-x-auto">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">
                Client-Side
              </h2>
              <div className="space-y-4">
                {loading ? (
                  <div className="flex justify-center items-center space-x-2 animate-pulse">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                  </div>
                ) : (
                  <ul className="divide-y divide-purple-200">
                    {users.map((user) => (
                      <li
                        key={user.id}
                        className="py-2 text-purple-900 hover:bg-purple-100 transition px-4 rounded"
                      >
                        {user.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-6 text-center">
          <p className="text-sm text-gray-600">
            Built with 🚀 Bun, React, and a whole lot of Tailwind magic
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
