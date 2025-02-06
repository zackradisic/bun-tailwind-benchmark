import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackshowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 rounded-2xl p-6 shadow-md">
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

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            User List {loading && '...'}
          </h2>

          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-600">Fetching users...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {users.map(user => (
                <div 
                  key={user.id} 
                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <p className="font-semibold text-gray-800">#{user.id}</p>
                  <p className="text-lg text-blue-600">{user.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        Built with ❤️ using <span className="font-bold text-blue-600">Bun</span>, 
        <span className="font-bold text-purple-600"> React</span>, and 
        <span className="font-bold text-green-600"> TypeScript</span>
      </div>
    </div>
  );
}
