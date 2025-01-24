import React, { useState } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
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
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Server-Side 🖥️
            </h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
              {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
      ]);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Client-Side 🌐
            </h2>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 active:scale-95'
              }`}
            >
              {loading ? 'Fetching...' : 'Fetch Users'}
            </button>
          </div>
        </div>

        {users.length > 0 && (
          <div className="mt-8 bg-green-50 p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-green-700">
              Users Fetched 🎉
            </h3>
            <ul className="space-y-2">
              {users.map((user) => (
                <li 
                  key={user.id} 
                  className="bg-green-100 p-3 rounded-lg flex justify-between items-center hover:bg-green-200 transition"
                >
                  <span className="font-medium">{user.name}</span>
                  <span className="text-green-600">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500">
        Built with 🚀 Bun, React & TypeScript
      </div>
    </div>
  );
}
