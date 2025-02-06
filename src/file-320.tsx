import "./style.css";
import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newUser, setNewUser] = useState('');

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())  
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const addUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name: newUser})  
    });
    const user = await res.json();
    setUsers([...users, user]);
    setNewUser('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
            Bun + React = 🚀
          </h1>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Server-side Features</h2>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li className="animate-fade-in">Built-in TypeScript support</li>
                <li className="animate-fade-in delay-100">SQLite database integration</li> 
                <li className="animate-fade-in delay-200">Hot module reloading</li>
                <li className="animate-fade-in delay-300">Bundler + Dev server in one</li>
              </ul>
            </div>

            <form onSubmit={addUser} className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Add User</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newUser}
                  onChange={e => setNewUser(e.target.value)}
                  className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter username..."
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Add
                </button>
              </div>
            </form>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Users</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-white/10 rounded w-full"></div>
                </div>
              ) : (
                <ul className="divide-y divide-white/10">
                  {users.map((user: any) => (
                    <li key={user.id} className="py-3 text-white/80 first:pt-0 last:pb-0">
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
