export default function HowToUsePage() {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center min-h-screen bg-gradient-to-br  from-gray-800 via-black to-gray-600">
        <h1 className="text-4xl font-bold mb-8 text-amber-50 underline">How to Use AnyVid ?</h1>
        <ol className="text-left text-lg space-y-4 list-decimal list-inside text-gray-700 dark:text-gray-300">
          <li>Copy the URL of the video you want to download from any supported platform (YouTube, Reels, TikTok, etc.).</li>
          <li>Paste it into the input field on the homepage.</li>
          <li>Click on <span className="font-semibold text-purple-500">"Download"</span> and wait for the process.</li>
          <li>Select the format and quality.</li>
          <li>Click download and enjoy your saved video! 🎉</li>
        </ol>
      </div>
    );
  }
  