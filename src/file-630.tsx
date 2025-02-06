import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Bun Fullstack Demo
          </h1>
          <p className="mt-4 text-gray-400">Server + Client bundled together, blazingly fast</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="ml-3 text-xl font-semibold">Server Side</h2>
            </div>
            <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage,
    "/dashboard": dashboard
  },
  async fetch(req) {
    if (req.url.endsWith("/api/data")) {
      return Response.json({
        message: "Hello from Bun!"
      });
    }
  }
})`}
              </code>
            </pre>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 shadow-xl transform hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-pink-500 rounded-full flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="ml-3 text-xl font-semibold">Client Side</h2>
            </div>
            <pre className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                {`// dashboard.html
<!DOCTYPE html>
<html>
  <head>
    <title>Dashboard</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./app.tsx"></script>
  </body>
</html>`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-12 flex justify-center space-x-4">
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
            <svg className="h-6 w-6 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400">Just run</p>
          <code className="bg-gray-800 px-4 py-2 rounded-lg text-purple-400 mt-2 inline-block">
            bun run app.ts
          </code>
        </div>
      </div>
    </div>
  );
}
