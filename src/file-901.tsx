import "./style.css";
export default function BunFullstackDemo() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
            <p className="text-gray-400 mt-2">Lightning fast React + TypeScript development</p>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
            <span className="text-sm">Server Running</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Client-side React
            </h2>
            <div className="space-y-4">
              <p className="text-gray-400">Dynamic client-side rendering with React 18</p>
              <div className="flex gap-2 flex-wrap">
                {['TypeScript', 'Tailwind', 'ESM'].map(tag => (
                  <span key={tag} className="px-2 py-1 rounded-full text-xs bg-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Bun Server
            </h2>
            <div className="space-y-4">
              <p className="text-gray-400">Built-in HTTP server with API routes</p>
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              ) : (
                <div className="text-sm">
                  <span className="text-green-500">{users.length}</span> users loaded from API
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-lg bg-gray-800/50 p-8 border border-gray-700">
          <pre className="font-mono text-sm overflow-x-auto">
            <code className="text-gray-300">
              {`// Start your fullstack app with one command
$ bun run server.ts`}
            </code>
          </pre>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Powered by Bun {Bun.version}
        </div>
      </div>
    </div>
  );
}
