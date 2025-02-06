import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const addUser = async () => {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: newUser})
    });
    const user = await res.json();
    setUsers(prev => [...prev, user]);
    setNewUser("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-8">
            Bun Fullstack Demo
          </h1>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={newUser}
                onChange={e => setNewUser(e.target.value)}
                placeholder="Add new user..."
                className="flex-1 bg-white/5 rounded-lg px-4 py-2 border border-white/20 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <button
                onClick={addUser}
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Add User
              </button>
            </div>

            <div className="bg-black/20 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Users from Bun Server</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 bg-white/10 rounded-lg w-full"></div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {users.map(user => (
                    <li 
                      key={user.id}
                      className="bg-white/5 rounded-lg px-4 py-3 flex items-center justify-between hover:bg-white/10 transition-colors"
                    >
                      <span className="font-medium">{user.name}</span>
                      <span className="text-sm text-pink-400">ID: {user.id}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-emerald-500/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">Server Features</h3>
              <ul className="list-disc list-inside space-y-2 text-emerald-200">
                <li>Built-in SQLite with Bun.sqlite</li>
                <li>Native HTTP server with Bun.serve()</li>
                <li>Automatic bundling of frontend assets</li>
                <li>TypeScript & JSX support out of the box</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
