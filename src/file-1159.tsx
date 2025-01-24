import { useState, useEffect } from "react";

export default function BunSpeedDemo() {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun + React = 🚀
          </h1>
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <img src="/bun-logo.svg" className="h-6 w-6" alt="Bun logo" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-purple-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">Server-side Code</h2>
            <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-green-400">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")){
      return Response.json(await 
        Bun.sql\`SELECT * FROM users\`
      );
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-black/30 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-pink-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-pink-300">API Response</h2>
            <div className="bg-black/50 p-4 rounded-lg h-[200px] overflow-y-auto">
              {loading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-2">
                      <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                      <span className="text-gray-300">{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400 animate-pulse">
          Bundled & served lightning fast with Bun ⚡️
        </div>
      </div>
    </div>
  );
}
