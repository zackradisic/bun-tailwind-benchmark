import "./style.css";
import React from 'react';

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">Welcome to Bun & Tailwind!</h1>
                <p className="text-gray-700 mb-4">This is a sample fullstack application using Bun, React, and TypeScript.</p>
                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                    Click Me
                </button>
            </div>
            <div className="mt-8 text-center">
                <h2 className="text-xl font-semibold text-gray-800">Server Response:</h2>
                <p className="text-gray-600">Fetching data from server...</p>
            </div>
        </div>
    )
}

export default App;
