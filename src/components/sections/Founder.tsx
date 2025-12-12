'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { companyInfo } from '@/data/company';

export function Founder() {
    const { language } = useLanguage();

    const highlights = [
        {
            icon: Code2,
            label: language === 'en' ? 'Full Stack Developer' : 'Desarrollador Full Stack',
            description: 'Python (FastAPI) & React',
        },
        {
            icon: Briefcase,
            label: language === 'en' ? 'Technical Lead' : 'Líder Técnico',
            description: 'MotionA Software Solutions',
        },
        {
            icon: GraduationCap,
            label: language === 'en' ? 'Computer Engineering' : 'Ingeniería en Informática',
            description: 'Universidad Nacional del Litoral',
        },
    ];

    return (
        <section id="founder" className="section-padding">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image / Avatar Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div
                            className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden"
                            style={{ background: 'var(--color-background-secondary)' }}
                        >
                            {/* Avatar Image */}
                            <Image
                                src="/avatar.png"
                                alt={companyInfo.founder.name}
                                fill
                                className="object-cover"
                                priority
                            />

                            {/* Floating card */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass">
                                <p
                                    className="font-serif font-semibold text-lg"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {companyInfo.founder.name}
                                </p>
                                <p
                                    className="text-sm"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {companyInfo.founder.role[language]}
                                </p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div
                            className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30"
                            style={{ background: 'var(--color-accent)' }}
                        />
                        <div
                            className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-2xl opacity-20"
                            style={{ background: 'var(--color-accent)' }}
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Header */}
                        <h2 className="heading-2 mb-4" style={{ color: 'var(--color-text-primary)' }}>
                            {t('founder.title', language)}
                        </h2>
                        <p className="text-body mb-8">
                            {t('founder.subtitle', language)}
                        </p>

                        {/* Description */}
                        <p
                            className="text-base leading-relaxed mb-8"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {t('founder.description', language)}
                        </p>

                        {/* Highlights */}
                        <div className="space-y-4 mb-8">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl"
                                    style={{ background: 'var(--color-background-secondary)' }}
                                >
                                    <div
                                        className="p-2 rounded-lg flex-shrink-0"
                                        style={{ background: 'var(--color-card)' }}
                                    >
                                        <item.icon
                                            className="w-5 h-5"
                                            style={{ color: 'var(--color-accent)' }}
                                        />
                                    </div>
                                    <div>
                                        <p
                                            className="font-medium"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href={companyInfo.founder.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex group"
                        >
                            {t('founder.viewPortfolio', language)}
                            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
