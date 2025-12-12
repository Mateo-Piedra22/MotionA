'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
                background: 'var(--color-background-secondary)',
                color: 'var(--color-text-secondary)'
            }}
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
        >
            <Languages className="w-4 h-4" />
            <span className="font-medium text-sm uppercase">{language}</span>
        </button>
    );
}
