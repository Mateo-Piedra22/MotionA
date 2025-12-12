'use client';

import { motion } from 'framer-motion';
import { Globe, Cloud, Lightbulb, Check, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { services } from '@/data/company';

const iconMap: Record<string, LucideIcon> = {
    Globe,
    Cloud,
    Lightbulb,
};

export function Services() {
    const { language } = useLanguage();

    return (
        <section id="services" className="section-padding">
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
                        {t('services.title', language)}
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        {t('services.subtitle', language)}
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon];

                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="card p-8 group"
                            >
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                                    style={{ background: 'var(--color-background-secondary)' }}
                                >
                                    {IconComponent && (
                                        <IconComponent
                                            className="w-7 h-7"
                                            style={{ color: 'var(--color-accent)' }}
                                        />
                                    )}
                                </div>

                                {/* Title */}
                                <h3
                                    className="heading-3 mb-3"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {service.title[language]}
                                </h3>

                                {/* Description */}
                                <p
                                    className="text-sm mb-6"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {service.description[language]}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features[language].map((feature, featureIndex) => (
                                        <li
                                            key={featureIndex}
                                            className="flex items-center gap-2 text-sm"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            <Check
                                                className="w-4 h-4 flex-shrink-0"
                                                style={{ color: 'var(--color-accent)' }}
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
