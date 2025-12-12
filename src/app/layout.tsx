import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    preload: true,
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    preload: true,
});

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#F5F0ED" },
        { media: "(prefers-color-scheme: dark)", color: "#1A1412" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://motiona.xyz"),
    title: {
        default: "MotionA | Software Development Company - Argentina",
        template: "%s | MotionA",
    },
    description:
        "MotionA is a software development company in Argentina specialized in creating innovative SaaS, web applications, and high-performance digital solutions using React, Python, and FastAPI.",
    keywords: [
        "software development company",
        "web development Argentina",
        "SaaS development",
        "React development",
        "Python FastAPI",
        "full stack developer",
        "custom software",
        "enterprise solutions",
        "MotionA",
        "Mateo Piedrabuena",
        "desarrollo de software",
        "aplicaciones web",
        "Santa Fe Argentina",
    ],
    authors: [{ name: "Mateo Piedrabuena", url: "https://mateopiedrabuena.motiona.xyz" }],
    creator: "MotionA",
    publisher: "MotionA",
    category: "technology",
    classification: "Business",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "https://motiona.xyz",
        languages: {
            "en-US": "https://motiona.xyz",
            "es-AR": "https://motiona.xyz",
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: ["es_AR"],
        url: "https://motiona.xyz",
        siteName: "MotionA",
        title: "MotionA | Software Development Company",
        description:
            "Transforming ideas into digital solutions. We create innovative, scalable, and high-performance software for businesses worldwide.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "MotionA - Software Development Company",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MotionA | Software Development Company",
        description:
            "Transforming ideas into digital solutions. We create innovative, scalable, and high-performance software.",
        images: ["/og-image.png"],
        creator: "@motiona_ok",
        site: "@motiona_ok",
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
    },
    other: {
        "msapplication-TileColor": "#4E3629",
        "apple-mobile-web-app-capable": "yes",
        "apple-mobile-web-app-status-bar-style": "default",
        "apple-mobile-web-app-title": "MotionA",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                {/* Google Analytics 4 */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-WMFMY5RD4B"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-WMFMY5RD4B');
                        `,
                    }}
                />

                {/* Preconnect to external resources for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />

                {/* DNS Prefetch for subdomains */}
                <link rel="dns-prefetch" href="https://ironhub.motiona.xyz" />
                <link rel="dns-prefetch" href="https://turnopro.motiona.xyz" />
                <link rel="dns-prefetch" href="https://argenpos.motiona.xyz" />
                <link rel="dns-prefetch" href="https://lofistudio.motiona.xyz" />

                {/* Favicons */}
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="icon" href="/icon-192.png" sizes="192x192" type="image/png" />
                <link rel="icon" href="/icon-512.png" sizes="512x512" type="image/png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
            </head>
            <body className={`${playfair.variable} ${inter.variable} antialiased`}>
                <ThemeProvider>
                    <LanguageProvider>
                        <a
                            href="#main-content"
                            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brown-derby focus:text-white focus:rounded-lg"
                        >
                            Skip to main content
                        </a>
                        <Header />
                        <main id="main-content">{children}</main>
                        <Footer />
                        <ScrollToTop />
                    </LanguageProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
