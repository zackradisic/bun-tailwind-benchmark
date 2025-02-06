import "./style.css";
export default function BunFullstackDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold">🥟</span>
            </div>
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Bun Fullstack
            </h1>
          </div>
          <div className="text-sm bg-gray-800 rounded-full px-4 py-1">
            Zero Setup Required
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Server-side</h2>
            <pre className="bg-black bg-opacity-50 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-gray-300">
                {`Bun.serve({
  static: {
    "/": homepage,
    "/dash": dashboard 
  },
  
  async fetch(req) {
    if (req.url.includes("/api")) {
      return Response.json({
        speed: "blazingly fast"
      })
    }
  }
})`}
              </code>
            </pre>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Server running
              </span>
              <span>|</span>
              <span>Port 3000</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-semibold mb-4 text-pink-400">Client-side</h2>
            <pre className="bg-black bg-opacity-50 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-gray-300">
                {`import { createRoot } from 'react-dom/client'
import { App } from './app'

createRoot(document.getElementById('root'))
  .render(<App />)

// HTML route
<script type="module" src="../src/app.tsx" />`}
              </code>
            </pre>
            <div className="mt-4 flex items-center space-x-2 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                React 18
              </span>
              <span>|</span>
              <span>TypeScript</span>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-purple-900 bg-opacity-20 rounded-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Development Features</h3>
            <span className="text-sm bg-purple-600 px-3 py-1 rounded-full">Included</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {['Hot Reload', 'TypeScript', 'Bundling', 'Source Maps', 'Minification', 'Asset Processing'].map(feature => (
              <div key={feature} className="bg-black bg-opacity-30 rounded-lg p-4 text-center">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
