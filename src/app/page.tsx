import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121] text-white px-6">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-semibold">ChatGPT Clone</h1>

        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          An AI assistant built with Next.js. Ask anything and get intelligent
          responses instantly.
        </p>

        <Link
          href="/chat"
          className="inline-block bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition"
        >
          Go to Chat →
        </Link>
      </div>
    </div>
  );
}
