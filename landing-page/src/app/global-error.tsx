"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);

  return (
    <html lang="en">
      <body className="bg-[#FDFCFB] text-[#101828] antialiased">
        <main className="flex min-h-screen items-center justify-center px-6 py-16">
          <div className="w-full max-w-md rounded-xl border border-[#EAECF0] bg-white p-6 text-center shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
            <h1 className="text-xl font-semibold">Application error</h1>
            <p className="mt-2 text-sm text-[#667085]">A critical error occurred. Please retry.</p>
            <button
              onClick={reset}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-[#7F56D9] px-4 text-sm font-semibold text-white"
            >
              Retry
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
