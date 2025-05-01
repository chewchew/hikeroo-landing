import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16 text-center">
      {/* Logo */}
      <h1 className="text-hikeroo-yellow text-3xl font-semibold mb-12">
        Hikeroo
      </h1>

      {/* Hero Text */}
      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="text-hikeroo-yellow text-5xl font-bold mb-6 leading-tight">
          You hike. We'll handle<br />everything else.
        </h2>
        <p className="text-hikeroo-yellow/90 text-xl mb-12">
          From gear lists to meal plans and weather alerts – get<br />
          everything you need for your trip, all in one app.
        </p>

        {/* CTA Button */}
        <button className="bg-hikeroo-yellow text-hikeroo-green px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition-colors">
          Sign me up for the Beta!
        </button>
      </div>

      {/* Phone Mockups */}
      <div className="w-full max-w-4xl mt-16 flex justify-center gap-4">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="w-[240px] h-[480px] bg-white rounded-[40px] border-4 border-black relative overflow-hidden"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl" />
          </div>
        ))}
      </div>
    </main>
  )
} 