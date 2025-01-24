import React from "react";

const FastFullstackDemo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Bun Fullstack Application</h1>
            <p className="text-lg text-gray-800 mb-4">
                Experience the speed and simplicity of building fullstack apps with Bun!
            </p>
            <div className="p-6 bg-white shadow-md rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-green-500 mb-2">Getting Started</h2>
                <ul className="list-disc list-inside">
                    <li className="text-gray-700 mb-1">1. Install Bun</li>
                    <li className="text-gray-700 mb-1">2. Create your project directory</li>
                    <li className="text-gray-700 mb-1">3. Start coding!</li>
                </ul>
            </div>
            <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">
                Get Started Now!
            </button>
        </div>
    );
};

export default FastFullstackDemo;
