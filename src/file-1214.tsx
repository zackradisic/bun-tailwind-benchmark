import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            🚀 Bun Fullstack Magic ✨
          </h1>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-indigo-50 rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Server</h2>
              <pre className="text-sm text-gray-700 bg-white p-4 rounded-lg overflow-x-auto">
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

            <div className="bg-purple-50 rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Client</h2>
              <pre className="text-sm text-gray-700 bg-white p-4 rounded-lg overflow-x-auto">
                {`createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Users Data</h3>
            {loading ? (
              <div className="flex justify-center items-center space-x-4 animate-pulse">
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="text-gray-700">Loading users...</div>
              </div>
            ) : (
              <ul className="grid grid-cols-3 gap-4">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-green-50 p-4 rounded-lg shadow-sm transition hover:bg-green-100 hover:scale-105"
                  >
                    <div className="font-semibold text-green-800">{user.name}</div>
                    <div className="text-sm text-gray-600">{user.email}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with ❤️ using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
