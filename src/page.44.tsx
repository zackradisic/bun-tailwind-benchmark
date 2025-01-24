import { useState, useEffect } from 'react';

export default function BunDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-bounce" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack Demo
            </h1>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-sm font-mono">Server Active</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Client-side React
            </h2>
            <p className="text-gray-400 mb-6">Built with TypeScript and Tailwind CSS</p>
            <div className="space-y-2">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"/>
                </div>
              ) : (
                users.map(user => (
                  <div key={user.id} className="flex items-center gap-3 bg-gray-700/30 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex items-center justify-center">
                      {user.name[0]}
                    </div>
                    <span>{user.name}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Bun Server
            </h2>
            <p className="text-gray-400 mb-6">Fast SQL queries with zero config</p>
            <div className="font-mono text-sm bg-black/30 p-4 rounded-lg">
              <pre className="text-green-400">Bun.serve({"{"}</pre>
              <pre className="pl-4">static: {"{"}/: homepage{"}"}</pre>
              <pre className="pl-4">fetch: async (req) => {"{"}</pre>
              <pre className="pl-8 text-blue-400">const users = await Bun.sql`</pre>
              <pre className="pl-8 text-purple-400">SELECT * FROM users</pre>
              <pre className="pl-8 text-blue-400">`;</pre>
              <pre className="pl-8">return Response.json(users);</pre>
              <pre className="pl-4">{"}"}</pre>
              <pre className="text-green-400">{"})"}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
