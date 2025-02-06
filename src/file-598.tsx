import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none">
                <path d="M12 4L20 20H4L12 4Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-sm font-medium">Server Active</span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
            <h2 className="text-xl font-semibold mb-4">Server-Side Features</h2>
            <ul className="space-y-3">
              {["Built-in SQLite", "Static File Serving", "API Routes", "HTML Rewriting"].map(feature => (
                <li key={feature} className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Users from API</h2>
            {loading ? (
              <div className="animate-pulse space-y-3">
                {[1,2,3].map(i => (
                  <div key={i} className="h-10 bg-white/5 rounded"/>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {users.map(user => (
                  <div key={user.id} className="flex items-center space-x-3 bg-white/5 rounded p-3">
                    <div className="h-8 w-8 rounded-full bg-indigo-500/50 flex items-center justify-center">
                      {user.name[0]}
                    </div>
                    <span>{user.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-white/60">
          Built with Bun, React, TypeScript & Tailwind
        </div>
      </div>
    </div>
  );
}
