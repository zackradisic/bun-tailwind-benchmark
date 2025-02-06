import "./style.css";
import React from 'react';

const FastFullStack = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-teal-600 mb-4">Build Fullstack with Bun!</h1>
            <p className="text-lg text-gray-700 mb-8">Experience the speed of Bun's fullstack development.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl p-6 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col p-4 bg-blue-50 border-l-4 border-blue-400">
                    <h2 className="text-2xl font-semibold text-blue-700">Frontend</h2>
                    <p className="text-gray-600">React components with Tailwind CSS styling.</p>
                </div>
                <div className="flex flex-col p-4 bg-green-50 border-l-4 border-green-400">
                    <h2 className="text-2xl font-semibold text-green-700">Backend</h2>
                    <p className="text-gray-600">Effortless API handling with minimal setup.</p>
                </div>
                <div className="flex flex-col p-4 bg-yellow-50 border-l-4 border-yellow-400">
                    <h2 className="text-2xl font-semibold text-yellow-700">Speed</h2>
                    <p className="text-gray-600">Lightning-fast bundling and serving.</p>
                </div>
                <div className="flex flex-col p-4 bg-red-50 border-l-4 border-red-400">
                    <h2 className="text-2xl font-semibold text-red-700">Simplicity</h2>
                    <p className="text-gray-600">Easy to configure and run your fullstack app.</p>
                </div>
            </div>
            <button className="mt-6 px-4 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-500 transition">Get Started</button>
        </div>
    );
};

export default FastFullStack;
