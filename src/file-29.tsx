import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02] hover:shadow-4xl duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          ⚡ Bun Fullstack Magic
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">🚀 Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              {`Bun.serve({
  static: { "/": homepage },
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">⚛️ Client-Side</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <div className="space-y-2">
                {users.map((user, idx) => (
                  <div 
                    key={idx} 
                    className="bg-purple-100 p-3 rounded-lg flex items-center space-x-4 transform transition-all hover:scale-[1.02] hover:bg-purple-200"
                  >
                    <span className="font-semibold text-purple-800">{user.name}</span>
                    <span className="text-sm text-purple-600">{user.email}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 italic">
          Built with Bun: TypeScript, React, and Tailwind in one seamless experience! 🌟
        </div>
      </div>
    </div>
  )
}
