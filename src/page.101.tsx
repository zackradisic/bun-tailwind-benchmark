import { useState, useEffect } from 'react';

export default function BunFullstackDemo() {
  const [data, setData] = useState<{message: string}[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"/>
            <span className="text-green-400 font-mono">Server Active</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Server Component
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded p-4 font-mono text-sm">
                <pre className="text-green-400">Bun.serve(&#123;</pre>
                <pre className="pl-4">port: 3000,</pre>
                <pre className="pl-4">fetch(req) &#123;</pre>
                <pre className="pl-8">return new Response("Hello!");</pre>
                <pre className="pl-4">&#125;</pre>
                <pre>&#125;);</pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Client Component
            </h2>
            <div className="relative">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"/>
                </div>
              ) : (
                <ul className="space-y-2">
                  {data.map((item, i) => (
                    <li key={i} className="bg-gray-900 rounded p-3 font-mono text-sm">
                      {item.message}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-400">
          <p className="text-sm">
            Built with Bun {process.version} • React • TypeScript • Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
