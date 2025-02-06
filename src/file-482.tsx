import "./style.css";
import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState<Array<{id: number, name: string}>>([])
  const [loading, setLoading] = useState(true)
  const [serverTime, setServerTime] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersResponse, timeResponse] = await Promise.all([
          fetch('/api/users'),
          fetch('/api/time')
        ])
        
        const userData = await usersResponse.json()
        const timeData = await timeResponse.json()
        
        setUsers(userData)
        setServerTime(timeData.time)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch:', error)
        setLoading(false)
      }
    }
    
    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-6 space-y-8">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Bun Fullstack Magic ✨
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-indigo-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-indigo-800">Server Details</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-indigo-600">Current Time:</span>
                <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">
                  {serverTime || 'Loading...'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-indigo-600">Runtime:</span>
                <span className="bg-indigo-100 px-3 py-1 rounded-full text-sm">
                  Bun.js
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-green-800">User Data</h2>
            {loading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin w-10 h-10 border-4 border-green-500 border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <ul className="space-y-2">
                {users.map(user => (
                  <li key={user.id} className="bg-green-100 px-4 py-2 rounded-lg flex justify-between items-center">
                    <span className="font-medium text-green-800">{user.name}</span>
                    <span className="text-sm text-green-600">ID: {user.id}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-600 mt-4">
        Built with 💖 using{' '}
        <span className="font-bold text-blue-600">Bun</span>,{' '}
        <span className="font-bold text-teal-600">React</span>, and{' '}
        <span className="font-bold text-pink-600">TypeScript</span>
      </div>
    </div>
  )
}
