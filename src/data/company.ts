export interface CompanyInfo {
    name: string;
    tagline: {
        en: string;
        es: string;
    };
    description: {
        en: string;
        es: string;
    };
    foundedYear: number;
    founder: {
        name: string;
        role: {
            en: string;
            es: string;
        };
        portfolioUrl: string;
    };
    email: string;
    phone: string;
    location: {
        en: string;
        es: string;
    };
}

export const companyInfo: CompanyInfo = {
    name: 'MotionA',
    tagline: {
        en: 'Transforming ideas into digital solutions',
        es: 'Transformando ideas en soluciones digitales',
    },
    description: {
        en: 'MotionA is a software development company founded in 2025, specialized in creating innovative, scalable, and high-performance digital solutions. From SaaS applications to modern web platforms, we transform ideas into products that drive businesses.',
        es: 'MotionA es una empresa de desarrollo de software fundada en 2025, especializada en crear soluciones digitales innovadoras, escalables y de alto rendimiento. Desde aplicaciones SaaS hasta plataformas web modernas, transformamos ideas en productos que impulsan negocios.',
    },
    foundedYear: 2025,
    founder: {
        name: 'Mateo Piedrabuena',
        role: {
            en: 'Founder & Technical Lead',
            es: 'Fundador & Líder Técnico',
        },
        portfolioUrl: 'https://mateopiedrabuena.motiona.xyz',
    },
    email: 'piedrabuena.mateo03@gmail.com',
    phone: '+54 9 343 447 3599',
    location: {
        en: 'Santa Fe, Argentina',
        es: 'Santa Fe, Argentina',
    },
};

export interface Service {
    id: string;
    icon: string;
    title: {
        en: string;
        es: string;
    };
    description: {
        en: string;
        es: string;
    };
    features: {
        en: string[];
        es: string[];
    };
}

export const services: Service[] = [
    {
        id: 'web-development',
        icon: 'Globe',
        title: {
            en: 'Web Development',
            es: 'Desarrollo Web',
        },
        description: {
            en: 'Modern, responsive, and high-performance web applications built with cutting-edge technologies.',
            es: 'Aplicaciones web modernas, responsivas y de alto rendimiento construidas con tecnologías de vanguardia.',
        },
        features: {
            en: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
            es: ['Diseño Responsivo', 'Optimizado para SEO', 'Carga Rápida', 'UI/UX Moderno'],
        },
    },
    {
        id: 'saas-development',
        icon: 'Cloud',
        title: {
            en: 'SaaS Applications',
            es: 'Aplicaciones SaaS',
        },
        description: {
            en: 'Scalable Software as a Service solutions tailored to your specific business needs.',
            es: 'Soluciones Software as a Service escalables adaptadas a las necesidades específicas de tu negocio.',
        },
        features: {
            en: ['Multi-tenant Architecture', 'Payment Integration', 'User Management', 'Analytics Dashboard'],
            es: ['Arquitectura Multi-tenant', 'Integración de Pagos', 'Gestión de Usuarios', 'Dashboard de Analíticas'],
        },
    },
    {
        id: 'consulting',
        icon: 'Lightbulb',
        title: {
            en: 'Technical Consulting',
            es: 'Consultoría Técnica',
        },
        description: {
            en: 'Expert guidance on technology stack selection, architecture design, and best practices.',
            es: 'Asesoramiento experto en selección de stack tecnológico, diseño de arquitectura y mejores prácticas.',
        },
        features: {
            en: ['Technology Assessment', 'Architecture Design', 'Code Review', 'Performance Optimization'],
            es: ['Evaluación Tecnológica', 'Diseño de Arquitectura', 'Revisión de Código', 'Optimización de Rendimiento'],
        },
    },
];

export interface Testimonial {
    id: string;
    name: string;
    role: {
        en: string;
        es: string;
    };
    company: string;
    content: {
        en: string;
        es: string;
    };
    avatar?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Carlos Rodríguez',
        role: {
            en: 'Technology Director',
            es: 'Director de Tecnología',
        },
        company: 'FitGym Network',
        content: {
            en: 'MotionA developed our gym management system from scratch. Their technical capability and attention to detail exceeded our expectations. The software now operates in 5 branches without any issues.',
            es: 'MotionA desarrolló nuestro sistema de gestión de gimnasios desde cero. Su capacidad técnica y atención al detalle superaron nuestras expectativas. El software ahora opera en 5 sucursales sin problemas.',
        },
    },
    {
        id: '2',
        name: 'Laura Mendez',
        role: {
            en: 'Project Leader',
            es: 'Líder de Proyecto',
        },
        company: 'Tech Solutions',
        content: {
            en: 'Working with MotionA was an excellent experience. On-time delivery, clear communication, and high-quality code. I definitely recommend them for development projects.',
            es: 'Trabajar con MotionA fue una experiencia excelente. Entrega a tiempo, comunicación clara y código de alta calidad. Definitivamente los recomiendo para proyectos de desarrollo.',
        },
    },
    {
        id: '3',
        name: 'Alejandro Torres',
        role: {
            en: 'Founder',
            es: 'Fundador',
        },
        company: 'StartupHub',
        content: {
            en: 'Their knowledge in Python and React is impressive. They solved complex problems with elegant solutions and always proposed proactive improvements.',
            es: 'Su conocimiento en Python y React es impresionante. Resolvieron problemas complejos con soluciones elegantes y siempre propusieron mejoras proactivas.',
        },
    },
];
