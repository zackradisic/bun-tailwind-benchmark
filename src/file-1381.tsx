import "./style.css";
import React, { useState } from 'react'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Developer' },
    { id: 2, name: 'Bob', role: 'Designer' }
  ])

  const fetchUsers = async () => {
    const response = await fetch('/api/users')
    const newUsers = await response.json()
    setUsers(newUsers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-8 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-[1.02] duration-300">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 text-center">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Client Side</h2>
            <ul className="space-y-3">
              {users.map(user => (
                <li key={user.id} className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center hover:bg-blue-100 transition">
                  <span className="font-semibold text-blue-900">{user.name}</span>
                  <span className="text-blue-600 text-sm">{user.role}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={fetchUsers}
              className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition transform active:scale-95"
            >
              Fetch Users
            </button>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Server Side</h2>
            <pre className="bg-white p-4 rounded-lg text-sm overflow-x-auto shadow-md">
              <code className="text-purple-900">
                {`Bun.serve({
  async fetch(req) {
    if (req.url.endsWith("/api/users")) {
      const users = await Bun.sql\`
        SELECT * FROM users
      \`
      return Response.json(users)
    }
  }
})`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 flex space-x-4">
        <div className="bg-white px-4 py-2 rounded-full shadow-md">
          🚀 React
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-md">
          🌟 TypeScript
        </div>
        <div className="bg-white px-4 py-2 rounded-full shadow-md">
          🔋 Bun
        </div>
      </div>
    </div>
  )
}
