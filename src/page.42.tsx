export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <img src="https://bun.sh/logo.svg" className="h-12 w-12" alt="Bun Logo" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="animate-pulse text-sm font-mono bg-gray-800 rounded-lg px-4 py-2">
            Ready in 2.4ms
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 hover:border-pink-500/50 transition-colors">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Server-side
            </h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage,  
    "/dashboard": dashboard
  },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      return Response.json(await db.users.find())
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="rounded-xl bg-gray-800 p-6 border border-gray-700 hover:border-violet-500/50 transition-colors">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Client-side
            </h2>
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`// dashboard.html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div id="root"></div>
    <script src="./app.tsx" />
  </body>
</html>`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 flex space-x-4 justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-lg font-medium transition-colors">
            Start Server
          </button>
          <button className="bg-violet-500 hover:bg-violet-600 px-6 py-2 rounded-lg font-medium transition-colors">
            Build Client
          </button>
        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          Built with Bun, React, TypeScript & Tailwind CSS
        </div>
      </div>
    </div>
  )
}
