import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 mb-4">
            Bun Fullstack
          </h1>
          <p className="text-xl text-gray-400">Lightning-fast React & TypeScript apps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                <span className="text-lg">🚀</span>
              </div>
              <h2 className="text-2xl font-semibold">Server-side</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <pre className="text-green-400">
                {`Bun.serve({
  static: {
    "/": homepage
  },
  async fetch(req) {
    if (req.url.includes("/api")) {
      return Response.json({
        message: "Hello from Bun!"
      })
    }
  }
})`}
              </pre>
            </div>
            <div className="mt-4 text-gray-400">
              Built-in HTTP server with static file serving and API routes
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                <span className="text-lg">⚛️</span>
              </div>
              <h2 className="text-2xl font-semibold">Client-side</h2>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <pre className="text-blue-400">
                {`import { createRoot } from 'react-dom/client'
import { App } from './App'

createRoot(document.getElementById('root'))
  .render(<App />)`}
              </pre>
            </div>
            <div className="mt-4 text-gray-400">
              Automatic bundling of React components and styles
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Development Features</h3>
            <span className="px-3 py-1 bg-violet-500 rounded-full text-sm">development: true</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <div className="text-lg mb-2">🔄</div>
              <div>Hot Reloading</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <div className="text-lg mb-2">🗺</div>
              <div>Source Maps</div>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <div className="text-lg mb-2">⚡️</div>
              <div>Fast Refresh</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
