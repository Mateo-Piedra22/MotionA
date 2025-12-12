'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, ImageIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { projects } from '@/data/projects';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { companyInfo } from '@/data/company';

interface SelectedProject {
    images: string[];
    title: string;
}

export function Projects() {
    const { language } = useLanguage();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

    const handleImageClick = (projectImages: string[], title: string) => {
        setSelectedProject({ images: projectImages, title });
        setModalOpen(true);
    };

    const handleLearnMore = (projectTitle: string) => {
        const subject = encodeURIComponent(
            language === 'en'
                ? `I want to learn more about ${projectTitle}`
                : `Quiero saber más sobre ${projectTitle}`
        );
        const body = encodeURIComponent(
            language === 'en'
                ? `Hello,\n\nI'm interested in learning more about ${projectTitle}.\n\nPlease contact me with more details.\n\nBest regards`
                : `Hola,\n\nEstoy interesado en saber más sobre ${projectTitle}.\n\nPor favor contáctenme con más detalles.\n\nSaludos`
        );
        window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--color-background-secondary)' }}>
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
                        {t('projects.title', language)}
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        {t('projects.subtitle', language)}
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card overflow-hidden group"
                        >
                            {/* Image */}
                            <div
                                className="relative h-56 md:h-64 cursor-pointer overflow-hidden"
                                onClick={() => handleImageClick(project.images, project.title)}
                            >
                                {imageErrors[project.id] ? (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center"
                                        style={{ background: 'var(--color-background-secondary)' }}
                                    >
                                        <div className="text-center">
                                            <ImageIcon
                                                className="w-16 h-16 mx-auto mb-2"
                                                style={{ color: 'var(--color-border)' }}
                                            />
                                            <span
                                                className="text-sm"
                                                style={{ color: 'var(--color-text-secondary)' }}
                                            >
                                                {project.title}
                                            </span>
                                        </div>
                                    </div>
                                ) : (
                                    <Image
                                        src={project.images[0]}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        onError={() => setImageErrors(prev => ({ ...prev, [project.id]: true }))}
                                    />
                                )}

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium">
                                        {language === 'en' ? 'View Gallery' : 'Ver Galería'}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Title & Status */}
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3
                                        className="heading-3"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <span
                                        className="px-2 py-1 text-xs rounded-full font-medium flex-shrink-0"
                                        style={{
                                            background: project.status === 'active'
                                                ? 'rgba(34, 197, 94, 0.15)'
                                                : 'var(--color-background-secondary)',
                                            color: project.status === 'active'
                                                ? 'rgb(34, 197, 94)'
                                                : 'var(--color-text-secondary)'
                                        }}
                                    >
                                        {project.status === 'active'
                                            ? (language === 'en' ? 'Active' : 'Activo')
                                            : (language === 'en' ? 'In Dev' : 'En Desarrollo')
                                        }
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className="text-sm mb-4"
                                    style={{ color: 'var(--color-text-secondary)' }}
                                >
                                    {project.description[language]}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-md"
                                            style={{
                                                background: 'var(--color-background-secondary)',
                                                color: 'var(--color-text-secondary)'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3">
                                    {project.url && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex-1 text-sm"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            {t('projects.viewProject', language)}
                                        </a>
                                    )}
                                    <button
                                        onClick={() => handleLearnMore(project.title)}
                                        className="btn-secondary flex-1 text-sm"
                                    >
                                        <Mail className="w-4 h-4 mr-2" />
                                        {t('projects.learnMore', language)}
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    images={selectedProject.images}
                    title={selectedProject.title}
                />
            )}
        </section>
    );
}
