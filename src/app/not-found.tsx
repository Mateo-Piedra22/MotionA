'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
    const { language } = useLanguage();

    return (
        <div className="min-h-screen flex items-center justify-center section-padding">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* 404 Number */}
                    <div
                        className="text-[150px] md:text-[200px] font-serif font-bold leading-none mb-4"
                        style={{ color: 'var(--color-border)' }}
                    >
                        404
                    </div>

                    {/* Title */}
                    <h1
                        className="heading-2 mb-4"
                        style={{ color: 'var(--color-text-primary)' }}
                    >
                        {language === 'en' ? 'Page Not Found' : 'Página No Encontrada'}
                    </h1>

                    {/* Description */}
                    <p
                        className="text-body max-w-md mx-auto mb-8"
                    >
                        {language === 'en'
                            ? "The page you're looking for doesn't exist or has been moved."
                            : 'La página que buscas no existe o ha sido movida.'
                        }
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/" className="btn-primary">
                            <Home className="w-5 h-5 mr-2" />
                            {language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="btn-secondary"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            {language === 'en' ? 'Go Back' : 'Regresar'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
