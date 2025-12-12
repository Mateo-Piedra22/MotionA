export type Language = 'en' | 'es';

export interface Translations {
    [key: string]: {
        en: string;
        es: string;
    };
}

export const translations: Translations = {
    // Navigation
    'nav.services': {
        en: 'Services',
        es: 'Servicios',
    },
    'nav.projects': {
        en: 'Projects',
        es: 'Proyectos',
    },
    'nav.founder': {
        en: 'Founder',
        es: 'Fundador',
    },
    'nav.contact': {
        en: 'Contact',
        es: 'Contacto',
    },
    'nav.about': {
        en: 'About',
        es: 'Acerca de',
    },

    // Hero section
    'hero.subtitle': {
        en: 'Software Development Company',
        es: 'Empresa de Desarrollo de Software',
    },
    'hero.cta.projects': {
        en: 'View Projects',
        es: 'Ver Proyectos',
    },
    'hero.cta.contact': {
        en: 'Get in Touch',
        es: 'Contáctenos',
    },

    // Services section
    'services.title': {
        en: 'What We Do',
        es: 'Lo Que Hacemos',
    },
    'services.subtitle': {
        en: 'We specialize in creating digital solutions that drive your business forward.',
        es: 'Nos especializamos en crear soluciones digitales que impulsan tu negocio.',
    },

    // Projects section
    'projects.title': {
        en: 'Our Projects',
        es: 'Nuestros Proyectos',
    },
    'projects.subtitle': {
        en: 'A selection of our most outstanding work.',
        es: 'Una selección de nuestros trabajos más destacados.',
    },
    'projects.viewProject': {
        en: 'View Project',
        es: 'Ver Proyecto',
    },
    'projects.learnMore': {
        en: 'Learn More',
        es: 'Saber Más',
    },
    'projects.technologies': {
        en: 'Technologies',
        es: 'Tecnologías',
    },

    // Founder section
    'founder.title': {
        en: 'Meet the Founder',
        es: 'Conoce al Fundador',
    },
    'founder.subtitle': {
        en: 'The vision and expertise behind MotionA.',
        es: 'La visión y experiencia detrás de MotionA.',
    },
    'founder.viewPortfolio': {
        en: 'View Portfolio',
        es: 'Ver Portfolio',
    },
    'founder.description': {
        en: 'Computer Engineering student at Universidad Nacional del Litoral (UNL), specialized in Full Stack software development. Proven experience in designing and deploying SaaS applications using Python (FastAPI) and React.',
        es: 'Estudiante de Ingeniería en Informática en la Universidad Nacional del Litoral (UNL), especializado en desarrollo de software Full Stack. Experiencia comprobable en el diseño y despliegue de aplicaciones SaaS utilizando Python (FastAPI) y React.',
    },

    // Testimonials section
    'testimonials.title': {
        en: 'What They Say',
        es: 'Lo Que Dicen',
    },
    'testimonials.subtitle': {
        en: 'Testimonials from clients and collaborators.',
        es: 'Testimonios de clientes y colaboradores.',
    },

    // Contact section
    'contact.title': {
        en: 'Let\'s Work Together',
        es: 'Trabajemos Juntos',
    },
    'contact.subtitle': {
        en: 'Have a project in mind? Let\'s talk.',
        es: '¿Tienes un proyecto en mente? Hablemos.',
    },
    'contact.info.title': {
        en: 'Contact Information',
        es: 'Información de Contacto',
    },
    'contact.social.title': {
        en: 'Social Networks',
        es: 'Redes Sociales',
    },
    'contact.form.name': {
        en: 'Your Name',
        es: 'Tu Nombre',
    },
    'contact.form.email': {
        en: 'Your Email',
        es: 'Tu Email',
    },
    'contact.form.project': {
        en: 'Project of Interest',
        es: 'Proyecto de Interés',
    },
    'contact.form.projectPlaceholder': {
        en: 'Select a project (optional)',
        es: 'Selecciona un proyecto (opcional)',
    },
    'contact.form.message': {
        en: 'Message',
        es: 'Mensaje',
    },
    'contact.form.submit': {
        en: 'Send Message',
        es: 'Enviar Mensaje',
    },
    'contact.form.general': {
        en: 'General Inquiry',
        es: 'Consulta General',
    },

    // Footer
    'footer.rights': {
        en: 'All rights reserved.',
        es: 'Todos los derechos reservados.',
    },
    'footer.builtBy': {
        en: 'Built by',
        es: 'Desarrollado por',
    },

    // Modal
    'modal.close': {
        en: 'Close',
        es: 'Cerrar',
    },
    'modal.previous': {
        en: 'Previous',
        es: 'Anterior',
    },
    'modal.next': {
        en: 'Next',
        es: 'Siguiente',
    },

    // Theme
    'theme.light': {
        en: 'Light Mode',
        es: 'Modo Claro',
    },
    'theme.dark': {
        en: 'Dark Mode',
        es: 'Modo Oscuro',
    },

    // Loading
    'loading': {
        en: 'Loading...',
        es: 'Cargando...',
    },
};

export function t(key: string, language: Language): string {
    const translation = translations[key];
    if (!translation) {
        console.warn(`Translation missing for key: ${key}`);
        return key;
    }
    return translation[language];
}
