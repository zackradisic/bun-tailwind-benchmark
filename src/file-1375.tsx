import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-bounce" alt="Bun logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              Server Running
            </div>
            <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              React + TypeScript
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-xl font-semibold mb-4 text-pink-400">Server-side</h2>
            <pre className="bg-black/30 p-4 rounded-lg text-sm">
              <code className="text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if (req.url.endsWith("/api/users")) {
      return Response.json(users);
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="rounded-xl bg-white/5 p-6 hover:bg-white/10 transition-colors">
            <h2 className="text-xl font-semibold mb-4 text-violet-400">Client-side</h2>
            <div className="bg-black/30 p-4 rounded-lg">
              {loading ? (
                <div className="animate-pulse flex justify-center py-8">
                  <div className="w-8 h-8 border-4 border-violet-500/20 border-t-violet-500 rounded-full animate-spin" />
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center gap-2 text-sm">
                      <span className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                        {user.id}
                      </span>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Built with Bun {process.version} • Bundled and served in one command
        </div>
      </div>
    </div>
  );
}
