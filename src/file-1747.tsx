import "./style.css";
import React from 'react';

const FastFullstackApp: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
            <h1 className="text-4xl font-bold text-white mb-5">
                Build Fullstack Apps with Bun in No Time!
            </h1>
            <p className="text-lg text-gray-200 mb-10">
                Experience the speed and simplicity of Bun's fullstack capabilities.
            </p>
            <div className="bg-white shadow-lg rounded-lg p-5 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-blue-600 mb-3">
                    Get Started Quickly!
                </h2>
                <ul className="list-disc list-inside">
                    <li className="text-gray-700 mb-2">⚡ Easy setup with Bun's server</li>
                    <li className="text-gray-700 mb-2">🔄 Automatic bundling for frontend and backend</li>
                    <li className="text-gray-700">🎨 Utilize Tailwind CSS for styling effortlessly</li>
                </ul>
            </div>
            <button className="mt-8 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Get Started Now
            </button>
        </div>
    );
};

export default FastFullstackApp;
