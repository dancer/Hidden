import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-white/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Version number */}
        <div className="fixed top-6 left-6 text-sm opacity-50">v1.0.0</div>
        
        {/* Current year */}
        <div className="fixed top-6 right-6 text-sm opacity-50">2024</div>

        {/* Main content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="text-center space-y-8 max-w-md">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-wide ml-0 sm:ml-4 md:ml-14">hidden.</h1>
              <p className="text-lg ml-0 sm:-ml-4 md:-ml-8">X DM Popout</p>
              <div className="text-lg mt-8">
                <p className="ml-0 sm:-ml-2 md:-ml-4">
                  A minimal extension that lets you pop out your X
                </p>
                <p className="ml-0 sm:-ml-[8rem] md:-ml-[16rem]">
                  DMs into a clean, customizable floating window.
                </p>
                <p className="ml-0 sm:-ml-[12rem] md:-ml-[23rem]">
                  Perfect for multitasking and focused conversations.
                </p>
              </div>
            </div>
            <div>
              <Link 
                href="https://chromewebstore.google.com/detail/x-dm-popout/cfigdffhbimhflamilnhpdmanljkidga" 
                className="ml-0 sm:-ml-[4rem] md:-ml-[8rem] inline-block font-bold text-lg border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-all"
              >
                DOWNLOAD HERE
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="fixed bottom-6 left-6 text-sm opacity-50">
          © After Image
        </div>

        {/* Navigation buttons */}
        <div className="fixed bottom-6 right-6 flex gap-4 text-sm">
          <Link 
            href="/support" 
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            Support
          </Link>
          <span className="opacity-50">•</span>
          <Link 
            href="/policy" 
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            Policy
          </Link>
        </div>
      </div>
    </main>
  )
}
