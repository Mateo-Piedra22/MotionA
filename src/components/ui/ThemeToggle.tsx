'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ background: 'var(--color-background-secondary)' }}
                aria-label="Toggle theme"
            >
                <Sun className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
            </button>
        );
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
                background: 'var(--color-background-secondary)',
                color: 'var(--color-text-secondary)'
            }}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {theme === 'dark' ? (
                <Sun className="w-5 h-5 transition-transform duration-300" />
            ) : (
                <Moon className="w-5 h-5 transition-transform duration-300" />
            )}
        </button>
    );
}
