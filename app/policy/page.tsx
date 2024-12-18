import Link from 'next/link'

export default function PolicyPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="fixed top-6 left-6 text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-medium mb-8">Policies</h1>
      
      <div className="space-y-6">
        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Terms of Use</h2>
          <div className="space-y-4 text-black/80">
            <p>
              By using our service, you agree to these terms and conditions. Our service is provided "as is" 
              and we make no warranties about its availability or functionality.
            </p>
            <p>
              We reserve the right to modify or terminate the service for any reason, without notice at any time.
            </p>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Privacy Policy</h2>
          <div className="space-y-4 text-black/80">
            <p>
              We respect your privacy and are committed to protecting your personal data. We only collect 
              information that's necessary for providing our service.
            </p>
            <p>
              We do not sell or share your personal information with third parties except as necessary 
              to provide our services or as required by law.
            </p>
          </div>
        </section>

        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Contact</h2>
          <p className="text-black/80">
            For any questions about these policies, please contact us at{' '}
            <a 
              href="mailto:contact@afterima.ge"
              className="text-black hover:opacity-70 transition-opacity font-medium"
            >
              contact@afterima.ge
            </a>
          </p>
        </section>
      </div>
    </main>
  );
} 