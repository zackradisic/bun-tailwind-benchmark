import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const addUser = async () => {
    setAdding(true);
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: newUser }),
    });
    setNewUser('');
    await fetchUsers();
    setAdding(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-2">
              Bun Fullstack
            </h1>
            <p className="text-gray-400 text-lg">Lightning fast fullstack React + TypeScript development</p>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-sm">Server Running</span>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              placeholder="Add new user..."
              className="flex-1 bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={addUser}
              disabled={adding || !newUser}
              className="bg-gradient-to-r from-pink-500 to-violet-500 px-6 py-2 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
            >
              {adding ? 'Adding...' : 'Add User'}
            </button>
          </div>

          <div className="space-y-4">
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  <div className="h-4 bg-white/20 rounded"></div>
                  <div className="h-4 bg-white/20 rounded w-5/6"></div>
                </div>
              </div>
            ) : (
              users.map(user => (
                <div 
                  key={user.id}
                  className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center font-bold">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-gray-400">ID: {user.id}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
