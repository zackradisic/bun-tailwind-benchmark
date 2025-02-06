import "./style.css";
import React, { useState, useEffect } from 'react';

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h1 className="text-4xl font-extrabold text-white text-center tracking-tight animate-pulse">
            Bun Fullstack Magic ✨
          </h1>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                Server-Side 🚀
              </h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm">
                {`Bun.serve({
  static: { "/": homepage },
  fetch(req) {
    return Response.json(users);
  }
})`}
              </pre>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-green-700 mb-4">
                Client-Side 💻
              </h2>
              <pre className="bg-gray-100 p-4 rounded-lg text-sm">
                {`const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('/api/users').then(res => 
      res.json().then(setUsers)
    );
  }, []);
}`}
              </pre>
            </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Users {loading && '⏳'}
            </h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-indigo-300 rounded-full"></div>
                <div className="w-12 h-12 bg-indigo-300 rounded-full"></div>
                <div className="w-12 h-12 bg-indigo-300 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-3">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 transform transition-all hover:scale-105 hover:shadow-xl"
                  >
                    <span className="text-indigo-600 font-semibold">
                      {user.name}
                    </span>
                    <span className="text-gray-500">
                      {user.email}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Built with 💖 using Bun, React & TypeScript
        </div>
      </div>
    </div>
  );
}
