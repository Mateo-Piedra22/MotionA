'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, LucideIcon } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/translations';
import { companyInfo } from '@/data/company';
import { projects } from '@/data/projects';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, LucideIcon> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
};

export function Contact() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        project: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const projectName = formData.project
            ? projects.find(p => p.id === formData.project)?.title || formData.project
            : t('contact.form.general', language);

        const subject = encodeURIComponent(
            language === 'en'
                ? `Contact from ${formData.name} - ${projectName}`
                : `Contacto de ${formData.name} - ${projectName}`
        );

        const body = encodeURIComponent(
            `${language === 'en' ? 'Name' : 'Nombre'}: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `${language === 'en' ? 'Project of Interest' : 'Proyecto de Interés'}: ${projectName}\n\n` +
            `${language === 'en' ? 'Message' : 'Mensaje'}:\n${formData.message}`
        );

        window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section-padding">
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
                        {t('contact.title', language)}
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        {t('contact.subtitle', language)}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {t('contact.form.name', language)}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                                    style={{
                                        background: 'var(--color-background-secondary)',
                                        color: 'var(--color-text-primary)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {t('contact.form.email', language)}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                                    style={{
                                        background: 'var(--color-background-secondary)',
                                        color: 'var(--color-text-primary)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                />
                            </div>

                            {/* Project Select */}
                            <div>
                                <label
                                    htmlFor="project"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {t('contact.form.project', language)}
                                </label>
                                <select
                                    id="project"
                                    value={formData.project}
                                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                                    style={{
                                        background: 'var(--color-background-secondary)',
                                        color: 'var(--color-text-primary)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                >
                                    <option value="">{t('contact.form.projectPlaceholder', language)}</option>
                                    {projects.map((project) => (
                                        <option key={project.id} value={project.id}>
                                            {project.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2"
                                    style={{ color: 'var(--color-text-primary)' }}
                                >
                                    {t('contact.form.message', language)}
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                                    style={{
                                        background: 'var(--color-background-secondary)',
                                        color: 'var(--color-text-primary)',
                                        border: '1px solid var(--color-border)',
                                    }}
                                />
                            </div>

                            {/* Submit */}
                            <button type="submit" className="btn-primary w-full group">
                                {t('contact.form.submit', language)}
                                <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Details */}
                        <div>
                            <h3
                                className="heading-3 mb-6"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {t('contact.info.title', language)}
                            </h3>
                            <div className="space-y-4">
                                <a
                                    href={`mailto:${companyInfo.email}`}
                                    className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:opacity-80"
                                    style={{ background: 'var(--color-background-secondary)' }}
                                >
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--color-card)' }}
                                    >
                                        <Mail className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                    </div>
                                    <div>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            Email
                                        </p>
                                        <p
                                            className="font-medium"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {companyInfo.email}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href={`tel:${companyInfo.phone}`}
                                    className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:opacity-80"
                                    style={{ background: 'var(--color-background-secondary)' }}
                                >
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--color-card)' }}
                                    >
                                        <Phone className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                    </div>
                                    <div>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {language === 'en' ? 'Phone' : 'Teléfono'}
                                        </p>
                                        <p
                                            className="font-medium"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {companyInfo.phone}
                                        </p>
                                    </div>
                                </a>

                                <div
                                    className="flex items-center gap-4 p-4 rounded-xl"
                                    style={{ background: 'var(--color-background-secondary)' }}
                                >
                                    <div
                                        className="p-3 rounded-lg"
                                        style={{ background: 'var(--color-card)' }}
                                    >
                                        <MapPin className="w-5 h-5" style={{ color: 'var(--color-accent)' }} />
                                    </div>
                                    <div>
                                        <p
                                            className="text-sm"
                                            style={{ color: 'var(--color-text-secondary)' }}
                                        >
                                            {language === 'en' ? 'Location' : 'Ubicación'}
                                        </p>
                                        <p
                                            className="font-medium"
                                            style={{ color: 'var(--color-text-primary)' }}
                                        >
                                            {companyInfo.location[language]}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3
                                className="heading-3 mb-6"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                {t('contact.social.title', language)}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((link) => {
                                    const IconComponent = iconMap[link.icon];
                                    return (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-3 rounded-xl transition-all hover:scale-105"
                                            style={{
                                                background: 'var(--color-background-secondary)',
                                                color: 'var(--color-text-primary)'
                                            }}
                                        >
                                            {IconComponent && (
                                                <IconComponent
                                                    className="w-5 h-5"
                                                    style={{ color: 'var(--color-accent)' }}
                                                />
                                            )}
                                            <span className="font-medium">{link.name}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
