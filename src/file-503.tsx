import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300 ease-in-out">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 text-center animate-pulse">
          Bun Fullstack Magic ✨
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-2xl p-6 border-4 border-blue-200 hover:border-blue-400 transition-all">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server-Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-blue-900">
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
          <div className="bg-green-50 rounded-2xl p-6 border-4 border-green-200 hover:border-green-400 transition-all">
            <h2 className="text-2xl font-bold text-green-700 mb-4">Client-Side</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-2 animate-pulse">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, idx) => (
                  <li 
                    key={idx} 
                    className="bg-green-100 p-2 rounded-lg shadow-sm hover:bg-green-200 transition-all"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-600 text-center">
        Built with 
        <span className="mx-2 font-bold text-blue-600">Bun</span> 
        + 
        <span className="mx-2 font-bold text-teal-600">React</span> 
        + 
        <span className="mx-2 font-bold text-pink-600">TypeScript</span>
      </div>
    </div>
  )
}
