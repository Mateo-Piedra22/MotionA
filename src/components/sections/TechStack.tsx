'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

// Tech stack icons can be fetched from CDN or use text representations
const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Next.js', color: '#000000' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'Python', color: '#3776AB' },
    { name: 'FastAPI', color: '#009688' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Tailwind CSS', color: '#06B6D4' },
    { name: 'Node.js', color: '#339933' },
];

export function TechStack() {
    const { language } = useLanguage();

    return (
        <section className="py-12 overflow-hidden" style={{ background: 'var(--color-background-secondary)' }}>
            <div className="container-custom mb-8">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-medium uppercase tracking-wider"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {language === 'en' ? 'Technologies We Use' : 'Tecnologías que Usamos'}
                </motion.p>
            </div>

            {/* Infinite scroll marquee */}
            <div className="relative">
                <div className="flex animate-marquee">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-8 py-4 mx-4 rounded-lg whitespace-nowrap"
                            style={{ background: 'var(--color-card)' }}
                        >
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ background: tech.color }}
                            />
                            <span
                                className="font-medium"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 20s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
