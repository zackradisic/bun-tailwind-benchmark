import "./style.css";
import { useState, useEffect } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverTime, setServerTime] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    };

    const timer = setInterval(async () => {
      const res = await fetch('/api/time');
      const time = await res.json();
      setServerTime(time);
    }, 1000);

    fetchData();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 rounded-lg backdrop-blur-lg p-8 shadow-xl border border-white/10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-8">
            Bun Fullstack Demo
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-pink-400">Server Status</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Server Time:</span>
                  <span className="font-mono bg-black/20 px-3 py-1 rounded">
                    {new Date(serverTime).toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"/>
                  <span className="text-green-400">Server Running</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-4 text-violet-400">Users</h2>
              {loading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"/>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-3 bg-black/20 p-3 rounded">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <span>{user.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-400">Server Code</h2>
            <pre className="bg-black/40 p-4 rounded-lg overflow-x-auto text-sm font-mono text-gray-300">
              {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`;
      return Response.json(users);
    }
    if (req.url.endsWith("/api/time")) {
      return Response.json(Date.now());
    }
    return new Response("Not Found", { status: 404 });
  }
});`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
