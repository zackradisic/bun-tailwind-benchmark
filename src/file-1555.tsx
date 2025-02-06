import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          ⚡ Bun Full Stack Demo
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Server</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
              {`Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
            </pre>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Client</h2>
            {loading ? (
              <div className="flex justify-center items-center space-x-3 animate-pulse">
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="bg-purple-100 p-2 rounded text-purple-800 font-medium">
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <span className="text-sm font-medium text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
            Built with Bun 🚀 React 💻 TypeScript 🔧 Tailwind 🎨
          </span>
        </div>
      </div>
    </div>
  )
}
