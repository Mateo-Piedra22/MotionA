'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';

const navItems = [
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'founder', href: '#founder' },
    { key: 'contact', href: '#contact' },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 glass shadow-lg' : 'py-5'
                }`}
        >
            <div className="container-custom">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-serif font-bold transition-colors hover:opacity-80"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        MotionA
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.key}
                                href={item.href}
                                className="link-hover font-medium transition-colors"
                                style={{ color: 'var(--color-text-secondary)' }}
                            >
                                {t(`nav.${item.key}`, language)}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <LanguageToggle />
                        <ThemeToggle />

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg transition-colors"
                            style={{ background: 'var(--color-background-secondary)' }}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                            ) : (
                                <Menu className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                            )}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 overflow-hidden"
                        >
                            <div
                                className="rounded-xl p-4 space-y-3"
                                style={{ background: 'var(--color-card)' }}
                            >
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.key}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={handleNavClick}
                                            className="block py-2 px-4 rounded-lg font-medium transition-colors hover:bg-opacity-80"
                                            style={{
                                                color: 'var(--color-text-primary)',
                                                background: 'var(--color-background-secondary)'
                                            }}
                                        >
                                            {t(`nav.${item.key}`, language)}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
