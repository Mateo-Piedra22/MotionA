'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: string[];
    title: string;
}

export function ProjectModal({ isOpen, onClose, images, title }: ProjectModalProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageError, setImageError] = useState<Record<number, boolean>>({});

    const handlePrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    handlePrevious();
                    break;
                case 'ArrowRight':
                    handleNext();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, handlePrevious, handleNext]);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setCurrentIndex(0);
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 rounded-t-2xl" style={{ background: 'var(--color-card)' }}>
                            <h3 className="text-lg font-serif font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                                {title}
                            </h3>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-lg transition-colors hover:bg-opacity-80"
                                style={{ background: 'var(--color-background-secondary)' }}
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5" style={{ color: 'var(--color-text-secondary)' }} />
                            </button>
                        </div>

                        {/* Image Container */}
                        <div
                            className="relative flex-1 min-h-[400px] md:min-h-[500px]"
                            style={{ background: 'var(--color-background-secondary)' }}
                        >
                            {imageError[currentIndex] ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div
                                            className="w-24 h-24 mx-auto mb-4 rounded-xl flex items-center justify-center"
                                            style={{ background: 'var(--color-background)' }}
                                        >
                                            <span className="text-4xl">🖼️</span>
                                        </div>
                                        <p style={{ color: 'var(--color-text-secondary)' }}>Image not available</p>
                                    </div>
                                </div>
                            ) : (
                                <Image
                                    src={images[currentIndex]}
                                    alt={`${title} - Image ${currentIndex + 1}`}
                                    fill
                                    className="object-contain"
                                    onError={() => setImageError((prev) => ({ ...prev, [currentIndex]: true }))}
                                />
                            )}

                            {/* Navigation Arrows */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={handlePrevious}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110"
                                        style={{ background: 'var(--color-card)', color: 'var(--color-text-primary)' }}
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-all hover:scale-110"
                                        style={{ background: 'var(--color-card)', color: 'var(--color-text-primary)' }}
                                        aria-label="Next image"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Dots Indicator */}
                        {images.length > 1 && (
                            <div
                                className="flex items-center justify-center gap-2 p-4 rounded-b-2xl"
                                style={{ background: 'var(--color-card)' }}
                            >
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8' : ''
                                            }`}
                                        style={{
                                            background: index === currentIndex
                                                ? 'var(--color-accent)'
                                                : 'var(--color-border)'
                                        }}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
