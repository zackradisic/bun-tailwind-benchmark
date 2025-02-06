import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackShowcase() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [serverTime, setServerTime] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timeResponse = await fetch('/api/time')
        const serverTimeData = await timeResponse.text()
        setServerTime(serverTimeData)

        const userResponse = await fetch('/api/users')
        const userData = await userResponse.json()
        setUsers(userData)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 duration-300">
        <h1 className="text-4xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
          Bun Fullstack Magic ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6 space-y-4 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700">Server Info</h2>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-700">Current Server Time:</p>
              <p className="text-blue-600 text-xl font-mono">
                {loading ? 'Loading...' : serverTime}
              </p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 space-y-4 shadow-lg">
            <h2 className="text-2xl font-bold text-purple-700">Users</h2>
            <div className="bg-white p-4 rounded-lg max-h-64 overflow-auto">
              {loading ? (
                <div className="flex justify-center items-center space-x-2">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-purple-600"></div>
                  <p>Fetching users...</p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {users.map((user: any, index) => (
                    <li 
                      key={index} 
                      className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-100 rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                        {user.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl text-white">
          <p className="text-lg font-bold">
            Built with Bun 🚀 React ⚛️ TypeScript 📘 Tailwind 🌈
          </p>
        </div>
      </div>
    </div>
  )
}
