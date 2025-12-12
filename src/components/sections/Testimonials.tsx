'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { testimonials } from '@/data/company';

export function Testimonials() {
    const { language } = useLanguage();

    return (
        <section
            className="section-padding"
            style={{ background: 'var(--color-background-secondary)' }}
        >
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-2 mb-4" style={{ color: 'var(--color-text-primary)' }}>
                        {t('testimonials.title', language)}
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        {t('testimonials.subtitle', language)}
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card p-8 relative"
                        >
                            {/* Quote Icon */}
                            <div
                                className="absolute -top-4 left-6 p-3 rounded-xl"
                                style={{ background: 'var(--color-accent)' }}
                            >
                                <Quote className="w-5 h-5 text-white" />
                            </div>

                            {/* Content */}
                            <p
                                className="text-sm leading-relaxed mt-4 mb-6"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                &ldquo;{testimonial.content[language]}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg"
                                    style={{
                                        background: 'var(--color-background-secondary)',
                                        color: 'var(--color-accent)'
                                    }}
                                >
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p
                                        className="font-medium"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {testimonial.name}
                                    </p>
                                    <p
                                        className="text-sm"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        {testimonial.role[language]} @ {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
