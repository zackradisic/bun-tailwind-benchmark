import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <img src="https://bun.sh/logo.svg" className="w-12 h-12 animate-spin-slow" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Bun Fullstack Demo
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h2 className="text-xl font-semibold mb-4 text-purple-300">Server Side</h2>
              <pre className="bg-black/50 p-4 rounded text-sm overflow-x-auto">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  fetch: async (req) => {
    if(req.url.endsWith("/api/users")) {
      return Response.json(await Bun.sql\`
        SELECT * FROM users
      \`);
    }
  }
})`}
              </pre>
            </div>

            <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <h2 className="text-xl font-semibold mb-4 text-purple-300">Client Side</h2>
              <div className="space-y-4">
                {isLoading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="h-4 bg-white/20 rounded w-3/4"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-400">{error}</div>
                ) : (
                  <ul className="space-y-2">
                    {users.map(user => (
                      <li key={user.id} className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                          {user.name[0]}
                        </span>
                        <span>{user.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            Built with Bun + React + TypeScript + Tailwind
          </div>
        </div>
      </div>
    </div>
  );
}
