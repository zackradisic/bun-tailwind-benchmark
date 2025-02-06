import "./style.css";
import React from 'react';

const FastAndSimpleBun: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-green-500 p-5">
            <h1 className="text-5xl font-bold text-white mb-4">
                🚀 Build Fullstack Apps with Bun
            </h1>
            <p className="text-lg text-gray-200 mb-8">
                It's incredibly fast and simple!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-3xl font-semibold text-blue-600 mb-2">
                    Why Choose Bun?
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li className="mb-2">🔥 Blazing Fast Render Times</li>
                    <li className="mb-2">⚡️ Effortless API Integration</li>
                    <li className="mb-2">💻 Fullstack Capabilities in One Package</li>
                </ul>
            </div>
            <button className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Get Started with Bun!
            </button>
        </div>
    );
};

export default FastAndSimpleBun;
