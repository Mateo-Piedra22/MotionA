import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Founder } from "@/components/sections/Founder";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <TechStack />
            <Services />
            <Projects />
            <Founder />
            <Testimonials />
            <Contact />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        name: "MotionA",
                        url: "https://motiona.xyz",
                        logo: "https://motiona.xyz/logo.png",
                        description:
                            "Software development company specialized in creating innovative, scalable, and high-performance digital solutions.",
                        foundingDate: "2025",
                        founder: {
                            "@type": "Person",
                            name: "Mateo Piedrabuena",
                            url: "https://mateopiedrabuena.motiona.xyz",
                            jobTitle: "Founder & Technical Lead",
                        },
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Santa Fe",
                            addressCountry: "Argentina",
                        },
                        contactPoint: {
                            "@type": "ContactPoint",
                            email: "piedrabuena.mateo03@gmail.com",
                            contactType: "sales",
                        },
                        sameAs: [
                            "https://github.com/Mateo-Piedra22",
                            "https://www.linkedin.com/in/mateo-piedrabuena/",
                            "https://twitter.com/motiona.ok",
                            "https://instagram.com/motiona.ok",
                        ],
                    }),
                }}
            />
        </>
    );
}

