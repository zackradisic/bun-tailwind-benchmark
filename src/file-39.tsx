import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
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
      body: JSON.stringify({name: newUser}),
      headers: {"Content-Type": "application/json"}
    });
    const user = await res.json();
    setUsers(prev => [...prev, user]);
    setNewUser("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="flex items-center space-x-4 mb-8">
            <img src="https://bun.sh/logo.svg" alt="Bun" className="w-16 h-16 animate-bounce"/>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                value={newUser}
                onChange={e => setNewUser(e.target.value)}
                className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Add new user..."
              />
              <button
                onClick={addUser}
                className="px-6 py-2 bg-violet-500 hover:bg-violet-600 rounded-lg text-white font-medium transition-colors"
              >
                Add User
              </button>
            </div>

            <div className="bg-black/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Users from Bun Server:</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-white/20 rounded-full"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded"></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {users.map(user => (
                    <div 
                      key={user.id}
                      className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center text-white font-bold">
                        {user.name[0]}
                      </div>
                      <span className="text-white">{user.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="text-white/60 text-sm">
              <p>Server running on Bun v1.0 • Client bundled with Bun's bundler</p>
              <code className="font-mono bg-black/20 rounded px-2 py-1 text-xs">
                bun run --hot server.ts
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
