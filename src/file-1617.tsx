import "./style.css";
import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const addUser = async () => {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: newUser }),
    });
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setNewUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4 mb-12">
          <img src="https://bun.sh/logo.svg" className="w-16 h-16 animate-spin-slow" />
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Bun Fullstack Demo
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Server-side</h2>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-gray-400">// Bun.serve configuration</p>
              <p className="text-green-400">static: &#123;</p>
              <p className="text-blue-400 ml-4">"/": homepage,</p>
              <p className="text-green-400">&#125;,</p>
              <p className="text-purple-400">fetch(req) &#123;</p>
              <p className="text-gray-300 ml-4">// API endpoints</p>
              <p className="text-blue-400 ml-4">return Response.json(data);</p>
              <p className="text-purple-400">&#125;</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4 text-pink-400">Client-side</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                className="flex-1 bg-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Add new user..."
              />
              <button
                onClick={addUser}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded font-bold hover:opacity-90 transition-opacity"
              >
                Add
              </button>
            </div>

            {loading ? (
              <div className="animate-pulse text-gray-400">Loading users...</div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, i) => (
                  <li key={i} className="bg-gray-700 rounded px-3 py-2">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">Built with Bun + React + TypeScript + Tailwind</p>
        </div>
      </div>
    </div>
  );
}
