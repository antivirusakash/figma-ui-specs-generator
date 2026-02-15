"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-md rounded-xl border border-[#EAECF0] bg-white p-6 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
        <h1 className="text-xl font-semibold text-[#101828]">Something went wrong</h1>
        <p className="mt-2 text-sm text-[#667085]">Please try again.</p>
        <button
          onClick={reset}
          className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-[#7F56D9] px-4 text-sm font-semibold text-white"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
