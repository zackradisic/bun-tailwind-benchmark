import React, { useState } from 'react';

const BunFullstackShowcase: React.FC = () => {
  const [users, setUsers] = useState<{name: string, id: number}[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await fetch('/api/users');
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = // fetch from DB
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            <button 
              onClick={fetchUsers}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transform transition duration-300 mb-4"
            >
              {loading ? 'Loading...' : 'Fetch Users'}
            </button>
            
            {users.length > 0 && (
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Users:</h3>
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="bg-gray-100 p-2 rounded flex justify-between">
                      <span>{user.name}</span>
                      <span className="text-gray-500">ID: {user.id}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            Built with 🚀 Bun, React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default BunFullstackShowcase;
