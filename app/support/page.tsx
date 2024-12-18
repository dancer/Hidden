import Link from 'next/link'

export default function SupportPage() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-4xl mx-auto">
      <Link 
        href="/" 
        className="fixed top-6 left-6 text-sm opacity-50 hover:opacity-100 transition-opacity flex items-center gap-2"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-medium mb-8">Support</h1>
      
      <div className="space-y-6">
        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Contact Us</h2>
          <p className="text-black/80 mb-4">
            For any questions, concerns, or support needs, please reach out to us at:
          </p>
          <a 
            href="mailto:contact@afterima.ge" 
            className="text-black hover:opacity-70 transition-opacity font-medium"
          >
            contact@afterima.ge
          </a>
        </section>

        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Response Time</h2>
          <p className="text-black/80">
            We aim to respond to all inquiries within 24-48 hours during business days. 
            For urgent matters, please include "URGENT" in your email subject line.
          </p>
        </section>

        <section className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-black/10">
          <h2 className="text-2xl font-medium mb-4">Before Contacting</h2>
          <ul className="list-disc list-inside text-black/80 space-y-2">
            <li>Check our policy page for general guidelines</li>
            <li>Include relevant details about your issue</li>
            <li>Specify your operating system and browser version if reporting technical issues</li>
          </ul>
        </section>
      </div>
    </main>
  );
} 