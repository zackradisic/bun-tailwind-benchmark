import React, { useState } from 'react';

const BunFullstackDemo: React.FC = () => {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-2xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-lg transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <button 
              onClick={fetchUsers}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-all"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
          </div>
        </div>

        {users.length > 0 && (
          <div className="mt-8 bg-green-50 p-6 rounded-xl border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Users</h3>
            <ul className="space-y-2">
              {users.map(user => (
                <li 
                  key={user.id} 
                  className="bg-green-100 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="font-semibold">{user.name}</span>
                  <span className="text-green-600">ID: {user.id}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 italic">
        Built with Bun 🥟 React 🌀 TypeScript ✨
      </div>
    </div>
  );
};

export default BunFullstackDemo;
