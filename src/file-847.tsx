import React from 'react';

const FastBunDemo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">🚀 Build Fullstack Apps with Bun!</h1>
            <p className="text-lg text-gray-700 mb-4">Experience the speed and simplicity of building fullstack applications.</p>
            <div className="flex flex-wrap justify-center">
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
                        <h2 className="text-3xl font-semibold text-green-600 mb-2">What is Bun?</h2>
                        <p className="text-gray-600">A modern JavaScript runtime that allows seamless fullstack development.</p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm">
                        <h2 className="text-3xl font-semibold text-purple-600 mb-2">Why Choose Bun?</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Fast execution</li>
                            <li>Built-in bundler</li>
                            <li>Friendly API</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all">
                Get Started with Bun
            </button>
        </div>
    );
}

export default FastBunDemo;
