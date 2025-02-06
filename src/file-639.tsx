import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([]);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl border border-gray-200 p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm">
              {`Bun.serve({
  fetch(req) {
    if (req.url === "/api/users") {
      return Response.json(users);
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client Side</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm">
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
          <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            {loading ? 'Loading Users...' : 'Users'}
          </h2>
          
          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="font-semibold text-gray-700">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <footer className="text-sm text-gray-500 text-center">
        Built with 🚀 Bun, React & TypeScript
      </footer>
    </div>
  );
}
