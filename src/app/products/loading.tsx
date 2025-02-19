import React from 'react';

export default function LoadingProduct() {
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0">
      <div className="flex space-x-2">
        <span className="w-4 h-4 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-gray-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-gray-600 rounded-full animate-bounce"></span>
      </div>
    </div>
  );
}
