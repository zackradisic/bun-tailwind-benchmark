import "./style.css";
import React, { useState, useEffect } from 'react'

export default function BunFullstackshowcase() {
  const [users, setUsers] = useState<any[]>([])
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
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-3xl duration-300">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Client Side</h2>
            <pre className="bg-blue-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-blue-700">
                {`// React + TypeScript
const App = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch('/api/users')
  }, [])
}`}
              </code>
            </pre>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Server Side</h2>
            <pre className="bg-purple-100 p-4 rounded-lg text-sm overflow-x-auto">
              <code className="text-purple-700">
                {`// Bun Server
Bun.serve({
  fetch(req) {
    if (req.url.endsWith('/api/users')) {
      return Response.json(users)
    }
  }
})`}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Users Fetched: {users.length}
          </h2>
          
          {loading ? (
            <div className="flex justify-center items-center space-x-4">
              <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
              <span className="text-blue-600">Loading...</span>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-4">
              {users.map((user, index) => (
                <li 
                  key={index} 
                  className="bg-white shadow-md rounded-lg p-4 text-center transform hover:scale-105 transition-transform"
                >
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 opacity-75">
        Built with 🔥 Bun + React + TypeScript + Tailwind
      </div>
    </div>
  )
}
