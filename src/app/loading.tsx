export default function Loading() {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'var(--color-background)' }}
        >
            <div className="text-center">
                {/* Logo animation */}
                <div className="mb-6 animate-pulse">
                    <span
                        className="text-4xl md:text-5xl font-serif font-bold"
                        style={{ color: 'var(--color-accent)' }}
                    >
                        MotionA
                    </span>
                </div>

                {/* Loading dots */}
                <div className="flex items-center justify-center gap-2">
                    <div className="loading-dot" style={{ color: 'var(--color-accent)' }} />
                    <div className="loading-dot" style={{ color: 'var(--color-accent)' }} />
                    <div className="loading-dot" style={{ color: 'var(--color-accent)' }} />
                </div>
            </div>
        </div>
    );
}
