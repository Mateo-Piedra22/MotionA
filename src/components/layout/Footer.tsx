'use client';

import Link from 'next/link';
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { socialLinks } from '@/data/social';
import { companyInfo } from '@/data/company';

const iconMap: Record<string, LucideIcon> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
};

export function Footer() {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="py-12 border-t"
            style={{
                borderColor: 'var(--color-border)',
                background: 'var(--color-background-secondary)'
            }}
        >
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-serif font-bold"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            MotionA
                        </Link>
                        <p
                            className="mt-3 text-sm max-w-xs"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            {companyInfo.tagline[language]}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className="font-serif font-semibold mb-4"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            {['services', 'projects', 'founder', 'contact'].map((item) => (
                                <Link
                                    key={item}
                                    href={`#${item}`}
                                    className="block text-sm transition-colors hover:opacity-80"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {t(`nav.${item}`, language)}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social & Founder */}
                    <div>
                        <h4
                            className="font-serif font-semibold mb-4"
                            style={{ color: 'var(--color-text-primary)' }}
                        >
                            {t('contact.social.title', language)}
                        </h4>
                        <div className="flex gap-3 mb-4">
                            {socialLinks.map((link) => {
                                const IconComponent = iconMap[link.icon];
                                return (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg transition-all hover:scale-110"
                                        style={{
                                            background: 'var(--color-background)',
                                            color: 'var(--color-text-secondary)'
                                        }}
                                        aria-label={link.name}
                                    >
                                        {IconComponent && <IconComponent className="w-5 h-5" />}
                                    </a>
                                );
                            })}
                        </div>
                        <a
                            href={companyInfo.founder.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
                            style={{ color: 'var(--color-accent)' }}
                        >
                            {t('footer.builtBy', language)} {companyInfo.founder.name}
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4"
                    style={{ borderColor: 'var(--color-border)' }}
                >
                    <p
                        className="text-sm"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        © {currentYear} MotionA. {t('footer.rights', language)}
                    </p>
                    <Link
                        href={companyInfo.founder.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-serif font-medium"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        MP.
                    </Link>
                </div>
            </div>
        </footer>
    );
}
