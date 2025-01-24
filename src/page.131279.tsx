import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [loading, setLoading] = useState(true);
  const [apiSpeed, setApiSpeed] = useState<number | null>(null);

  useEffect(() => {
    const startTime = performance.now();
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        const endTime = performance.now();
        setUsers(data);
        setApiSpeed(Math.round(endTime - startTime));
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-[1.02] duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
            Bun Fullstack Magic 🚀
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-5 border-2 border-blue-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Server</h2>
              <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
                {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users);
    }
  }
})`}
              </pre>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200 hover:shadow-lg transition-all">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Client</h2>
              <pre className="bg-purple-100 p-4 rounded-lg text-sm text-purple-900">
                {`const [users, setUsers] = useState([]);
useEffect(() => {
  fetch('/api/users')
    .then(res => res.json())
    .then(setUsers);
}, [])`}
              </pre>
            </div>
          </div>
          
          <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Users List</h3>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-5 h-5 bg-green-400 rounded-full"></div>
                <div className="text-green-700">Loading users...</div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center hover:bg-green-100 transition-colors">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-gray-500">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {apiSpeed && (
            <div className="text-center bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200">
              <p className="text-xl font-semibold text-yellow-800">
                API Call Speed: <span className="text-yellow-600">{apiSpeed}ms</span>
              </p>
            </div>
          )}
        </div>
        
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with Bun, React & TypeScript ✨
        </div>
      </div>
    </div>
  );
}
