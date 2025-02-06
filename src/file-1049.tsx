import "./style.css";
import { useEffect, useState } from "react";

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<{id: number, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/bun.svg" className="w-12 h-12 animate-bounce" alt="Bun logo"/>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Client-side React
            </h2>
            <div className="prose prose-invert">
              <code className="text-sm bg-black/30 rounded p-2 block">
                {`import { createRoot } from 'react-dom/client';\ncreateRoot(document.getElementById('root')).render(<App />);`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur border border-gray-700">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Bun Server
            </h2>
            <div className="prose prose-invert">
              <code className="text-sm bg-black/30 rounded p-2 block">
                {`Bun.serve({\n  fetch: async (req) => {\n    if(req.url.endsWith("/api/users"))\n      return Response.json(await db.users.all());\n  }\n});`}
              </code>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-800/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Live Data from Server:</h3>
          {isLoading ? (
            <div className="animate-pulse flex space-x-4">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            </div>
          ) : (
            <ul className="space-y-2">
              {users.map(user => (
                <li key={user.id} className="flex items-center gap-2 text-gray-300">
                  <span className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-300">
                    {user.name[0]}
                  </span>
                  {user.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Built with Bun + React + TypeScript + Tailwind</p>
        </div>
      </div>
    </div>
  );
}
