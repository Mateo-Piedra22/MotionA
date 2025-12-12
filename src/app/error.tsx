'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center section-padding">
            <div className="container-custom text-center">
                {/* Icon */}
                <div
                    className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ background: 'var(--color-background-secondary)' }}
                >
                    <AlertTriangle
                        className="w-10 h-10"
                        style={{ color: 'var(--color-accent)' }}
                    />
                </div>

                {/* Title */}
                <h1
                    className="heading-2 mb-4"
                    style={{ color: 'var(--color-text-primary)' }}
                >
                    Something went wrong
                </h1>

                {/* Description */}
                <p
                    className="text-body max-w-md mx-auto mb-8"
                >
                    An unexpected error occurred. Please try again or return to the homepage.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={reset} className="btn-primary">
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try Again
                    </button>
                    <Link href="/" className="btn-secondary">
                        <Home className="w-5 h-5 mr-2" />
                        Back to Home
                    </Link>
                </div>

                {/* Error ID for debugging */}
                {error.digest && (
                    <p
                        className="mt-8 text-xs"
                        style={{ color: 'var(--color-text-secondary)' }}
                    >
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    );
}
