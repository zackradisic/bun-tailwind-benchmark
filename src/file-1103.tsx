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
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name: newUser})
    });
    const user = await res.json();
    setUsers([...users, user]);
    setNewUser("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Bun Fullstack Demo
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"/>
              <span className="text-white/80 text-sm">Server Running</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Add User</h2>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newUser}
                  onChange={e => setNewUser(e.target.value)}
                  className="flex-1 bg-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter username..."
                />
                <button
                  onClick={addUser}
                  className="px-6 py-2 bg-purple-500 hover:bg-purple-600 transition rounded-lg text-white font-medium"  
                >
                  Add
                </button>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">Users</h2>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                    <div className="h-4 bg-white/20 rounded"></div>
                    <div className="h-4 bg-white/20 rounded w-5/6"></div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {users.map(user => (
                    <div
                      key={user.id}
                      className="bg-white/10 rounded-lg px-4 py-3 text-white flex items-center justify-between group hover:bg-white/20 transition"
                    >
                      <span>{user.name}</span>
                      <span className="text-white/40 text-sm opacity-0 group-hover:opacity-100 transition">
                        ID: {user.id}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
