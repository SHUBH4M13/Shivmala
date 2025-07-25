import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-16 h-16 border-4 border-t-transparent border-r-transparent border-b-[#059BD6] border-l-[#253A6E] rounded-full animate-spin"></div>
    </div>
  );
}
