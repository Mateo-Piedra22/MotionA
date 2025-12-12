'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { companyInfo } from '@/data/company';

export function Hero() {
    const { language } = useLanguage();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full opacity-20 blur-3xl"
                    style={{ background: 'var(--color-accent)' }}
                />
                <div
                    className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full opacity-10 blur-3xl"
                    style={{ background: 'var(--color-accent)' }}
                />
            </div>

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container-custom relative z-10 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                        style={{
                            background: 'var(--color-background-secondary)',
                            border: '1px solid var(--color-border)'
                        }}
                    >
                        <Sparkles className="w-4 h-4" style={{ color: 'var(--color-accent)' }} />
                        <span
                            className="text-sm font-medium"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {t('hero.subtitle', language)}
                        </span>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="heading-1 mb-6"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        <span className="text-gradient">{companyInfo.name}</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-serif font-medium mb-6"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {companyInfo.tagline[language]}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-body max-w-2xl mx-auto mb-10"
                    >
                        {companyInfo.description[language]}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="#projects" className="btn-primary group">
                            {t('hero.cta.projects', language)}
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="#contact" className="btn-secondary">
                            {t('hero.cta.contact', language)}
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
                    >
                        {[
                            { value: '4+', label: language === 'en' ? 'Projects' : 'Proyectos' },
                            { value: '2025', label: language === 'en' ? 'Founded' : 'Fundada' },
                            { value: '100%', label: language === 'en' ? 'Commitment' : 'Compromiso' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="text-3xl md:text-4xl font-serif font-bold"
                                    style={{ color: 'var(--color-accent)' }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    className="text-sm mt-1"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 flex items-start justify-center p-2"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <motion.div
                        animate={{ height: ['0%', '30%', '0%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 rounded-full"
                        style={{ background: 'var(--color-accent)' }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
