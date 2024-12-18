import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ['300', '400', '500']
});

export const metadata: Metadata = {
  title: "hidden.",
  description: "A minimal X DM experience.",
  openGraph: {
    title: 'hidden.',
    description: 'A minimal X DM experience.',
    images: [
      {
        url: '/metacat.png',
        width: 1200,
        height: 630,
        alt: 'hidden. X DM Popout',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'hidden.',
    description: 'A minimal X DM experience.',
    images: ['/metacat.png'],
  },
  icons: {
    apple: [
      { url: '/metacat.png' },
    ]
  },
  other: {
    'discord:image': '/metacat.png',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="apple-touch-icon" href="/metacat.png" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>{children}</body>
    </html>
  );
}
