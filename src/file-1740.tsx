import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'

export default function BunFullstackDemo() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [serverInfo, setServerInfo] = useState({
    runtime: 'Bun',
    version: '1.0.0',
    status: 'Ready 🚀'
  })

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch users', error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl p-8 transform transition-all hover:scale-105 duration-300">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Bun Fullstack Demo
          </h1>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-600">
              {serverInfo.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6 bg-gray-50 p-4 rounded-xl">
          <div className="text-center">
            <span className="block text-xl font-bold text-blue-600">{serverInfo.runtime}</span>
            <span className="text-xs text-gray-500">Runtime</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-purple-600">{serverInfo.version}</span>
            <span className="text-xs text-gray-500">Version</span>
          </div>
          <div className="text-center">
            <span className="block text-xl font-bold text-green-600">{users.length}</span>
            <span className="text-xs text-gray-500">Users</span>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center space-x-2 animate-pulse">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 rounded-lg overflow-hidden">
              <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: any) => (
                  <tr key={user.id} className="bg-white border-b hover:bg-gray-50 transition duration-200">
                    <td className="px-6 py-4 font-medium text-gray-900">{user.id}</td>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
