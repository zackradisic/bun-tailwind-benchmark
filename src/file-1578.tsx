import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
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
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: newUser})
    });
    const user = await res.json();
    setUsers(prev => [...prev, user]);
    setNewUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-gray-700">
          <div className="flex items-center gap-4 mb-8">
            <img src="https://bun.sh/logo.svg" className="w-12 h-12 animate-bounce" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                value={newUser}
                onChange={e => setNewUser(e.target.value)}
                className="flex-1 bg-gray-900 rounded-lg px-4 py-2 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none transition"
                placeholder="Enter username..."
              />
              <button
                onClick={addUser}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Add User
              </button>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Users from Bun Server</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-gray-700 rounded-lg w-full"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li 
                      key={user.id}
                      className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 hover:bg-gray-750 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center font-bold">
                        {user.name[0].toUpperCase()}
                      </div>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="text-sm text-gray-400 text-center">
              Powered by Bun's built-in bundler & server
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
