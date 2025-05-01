import Image from 'next/image'

export default function Home() {
  // Use basePath only in production
  const imagePath = process.env.NODE_ENV === 'production' 
    ? '/hikeroo-landing/app-preview.png'
    : '/app-preview.png'

  return (
    <main className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
      {/* Logo */}
      <h1 className="font-pacifico text-hikeroo-yellow text-logo-mobile sm:text-logo font-normal mb-8 sm:mb-12">
        Hikeroo
      </h1>

      {/* Hero Text */}
      <div className="w-full max-w-[90vw] lg:max-w-5xl mx-auto mb-8">
        <h2 className="font-mousememoirs text-hikeroo-yellow text-heading-mobile sm:text-heading-tablet lg:text-heading font-normal mb-4 sm:mb-6 leading-tight">
          You hike. We'll handle everything else.
        </h2>
        <p className="font-sans text-hikeroo-yellow/90 text-body-mobile sm:text-body font-light mb-8 sm:mb-12 max-w-3xl mx-auto">
          From gear lists to meal plans and weather alerts – get
          everything you need for your trip, all in one app.
        </p>

        {/* CTA Button */}
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans bg-hikeroo-yellow text-hikeroo-bg px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-button font-semibold hover:bg-opacity-90 transition-colors"
        >
          Sign me up for the Beta!
        </a>
      </div>

      {/* App Preview Image */}
      <div className="w-full max-w-[95vw] lg:max-w-4xl mt-8 sm:mt-12 lg:mt-16 px-4">
        <Image
          src={imagePath}
          alt="Hikeroo App Preview"
          width={2132}
          height={1266}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
    </main>
  )
} 