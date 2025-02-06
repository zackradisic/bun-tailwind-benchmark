import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

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
      <div className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-4xl transform transition-all hover:scale-[1.02] hover:shadow-4xl">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 mb-8 text-center tracking-tight">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Server Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm text-blue-900">
              {`Bun.serve({
  static: { "/": index },
  fetch(req) {
    return Response.json(users)
  }
})`}
            </pre>
          </div>

          <div className="bg-purple-50 p-6 rounded-2xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Client Side</h2>
            {loading ? (
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-purple-300 rounded"></div>
                  <div className="h-4 bg-purple-300 rounded"></div>
                </div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map((user, index) => (
                  <li 
                    key={index} 
                    className="bg-purple-100 p-2 rounded-lg text-purple-800 transition-all hover:bg-purple-200 hover:translate-x-1"
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="https://bun.sh" 
            target="_blank" 
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition-all transform hover:-translate-y-1"
          >
            Learn More About Bun
          </a>
        </div>
      </div>
    </div>
  )
}
