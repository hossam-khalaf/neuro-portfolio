import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heba-ali.com"),
  title: "Heba Ali — PhD Candidate in Neuroscience",
  description:
    "Neuroscientist and biochemist specializing in Alzheimer's disease, estrogen receptor signaling, and single-cell transcriptomics at Karolinska Institutet.",
  openGraph: {
    title: "Heba Ali — PhD Candidate in Neuroscience",
    description: "Neuroscientist and biochemist specializing in Alzheimer's disease, estrogen receptor signaling, and single-cell transcriptomics at Karolinska Institutet.",
    url: "https://heba-ali.com",
    siteName: "Heba Ali Portfolio",
    images: [
      {
        url: "/avatar.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Heba Ali — PhD Candidate in Neuroscience",
    description: "Neuroscientist and biochemist specializing in Alzheimer's disease, estrogen receptor signaling, and single-cell transcriptomics at Karolinska Institutet.",
    images: ["/avatar.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Heba Ali",
  jobTitle: "PhD Candidate in Neuroscience",
  affiliation: {
    "@type": "Organization",
    name: "Karolinska Institutet"
  },
  url: "https://heba-ali.com",
  sameAs: [
    "https://www.linkedin.com/in/hebaali-453021153/",
    "https://scholar.google.com/citations?user=3n4IMasAAAAJ&hl=en",
    "https://github.com/heba-ali2030",
    "https://orcid.org/my-orcid?orcid=0009-0004-4399-1075"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
