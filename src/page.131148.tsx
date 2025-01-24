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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-blue-200">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Server Side</h2>
            <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-gray-800">
                {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`SELECT * FROM users\`
      return Response.json(users)
    }
  }
})`}
              </code>
            </pre>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl border-2 border-dashed border-green-200">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Client Side</h2>
            <div className="space-y-4">
              {loading ? (
                <div className="animate-pulse flex space-x-4">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-12 bg-gray-300 rounded w-full"></div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user: any) => (
                    <li 
                      key={user.id} 
                      className="bg-green-50 p-3 rounded-lg shadow-sm hover:bg-green-100 transition-colors"
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 transition-all">
            <span className="font-semibold">Built with Bun 🚀</span>
          </div>
        </div>
      </div>
    </div>
  )
}
