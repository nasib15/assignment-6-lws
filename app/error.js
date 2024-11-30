"use client";

import { RetryIcon } from "@/components/Icons/SVG";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-6xl font-bold text-red-500 mb-4">Oops!</h2>
        <p className="text-xl text-gray-600 mb-8">
          Something went wrong while loading this page.
        </p>
        <div className="space-y-4">
          <button
            onClick={() => reset()}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 inline-flex items-center"
          >
            <RetryIcon />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
