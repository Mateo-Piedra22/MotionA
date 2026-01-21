export interface Project {
    id: string;
    slug: string;
    title: string;
    description: {
        en: string;
        es: string;
    };
    longDescription?: {
        en: string;
        es: string;
    };
    url?: string;
    images: string[];
    technologies: string[];
    featured: boolean;
    status: 'active' | 'development' | 'coming-soon';
    year: number;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'ironhub',
        title: 'IronHub System',
        description: {
            en: 'Comprehensive SaaS platform for gym management. Access control, automated billing, and real-time financial reports.',
            es: 'Plataforma SaaS integral para gestión de gimnasios. Control de accesos, facturación automatizada y reportes financieros en tiempo real.',
        },
        longDescription: {
            en: 'IronHub is a complete gym management solution that streamlines daily operations. Features biometric access control, automated membership billing, class scheduling, and comprehensive financial reporting dashboard.',
            es: 'IronHub es una solución completa de gestión de gimnasios que optimiza las operaciones diarias. Incluye control de acceso biométrico, facturación automática de membresías, programación de clases y un dashboard completo de reportes financieros.',
        },
        url: 'https://ironhub.motiona.xyz',
        images: [
            '/projects/ironhub/cover.png',
            '/projects/ironhub/1.png',
            '/projects/ironhub/2.png',
            '/projects/ironhub/3.png',
            '/projects/ironhub/4.png',
        ],
        technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Tailwind CSS'],
        featured: true,
        status: 'active',
        year: 2026,
    },
    {
        id: '2',
        slug: 'irontrain',
        title: 'IronTrain',
        description: {
            en: 'Strength training app focused on privacy and speed. It allows you to record routines, calculate loads, and view real progress without creating accounts or connecting to the internet.',
            es: 'Aplicación de entrenamiento de fuerza enfocada en la privacidad y la rapidez. Permite registrar rutinas, calcular cargas y visualizar el progreso real sin necesidad de crear cuentas ni conexión a internet.',
        },
        longDescription: {
            en: 'IronTrain is a weightlifting journal designed to work completely offline, eliminating distractions and ensuring that information remains private on the device. It facilitates the quick recording of sets and effort (RPE), integrating immediate assistance tools such as an automatic rest timer and a disc calculator for bar assembly. In addition, it allows you to view your actual training progress through metrics such as volume, consistency, and maximum strength estimates (1RM).',
            es: 'IronTrain es un diario de levantamiento de pesas diseñado para funcionar totalmente offline, lo que elimina distracciones y garantiza que la información se mantenga privada en el dispositivo. Facilita el registro ágil de series y esfuerzo (RPE), integrando herramientas de asistencia inmediata como un temporizador de descanso automático y una calculadora de discos para el armado de barras. Además, permite visualizar la evolución real del entrenamiento mediante métricas de volumen, consistencia y estimaciones de fuerza máxima (1RM).',
        },
        url: 'https://irontrain.motiona.xyz',
        images: [
            '/projects/irontrain/cover.png',
            '/projects/irontrain/1.png',
            '/projects/irontrain/2.png',
        ],
        technologies: ['React', 'Expo-Router', 'Expo-SQLite', 'NativeWind', 'Zustand'],
        featured: true,
        status: 'active',
        year: 2026,
    },
    {
        id: '3',
        slug: 'turnopro',
        title: 'TurnoPro',
        description: {
            en: 'Smart solution for online appointment and booking management. Optimizes professional schedules and reduces no-shows.',
            es: 'Solución inteligente para la gestión de citas y reservas online. Optimiza la agenda de profesionales y reduce el ausentismo.',
        },
        longDescription: {
            en: 'TurnoPro revolutionizes appointment scheduling with smart features like automated reminders, online booking, client management, and analytics to reduce no-shows and maximize productivity.',
            es: 'TurnoPro revoluciona la programación de citas con funciones inteligentes como recordatorios automáticos, reservas online, gestión de clientes y analíticas para reducir el ausentismo y maximizar la productividad.',
        },
        url: 'https://turnopro.motiona.xyz',
        images: [
            '/projects/turnopro/cover.png',
            '/projects/turnopro/1.png',
            '/projects/turnopro/2.png',
        ],
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        featured: true,
        status: 'active',
        year: 2026,
    },
    {
        id: '4',
        slug: 'argenpos',
        title: 'ArgenPOS',
        description: {
            en: 'Agile Point of Sale (POS) system for retail. Inventory management, sales tracking, and daily cash register with intuitive interface.',
            es: 'Sistema de Punto de Venta (POS) ágil para comercios. Gestión de inventario, ventas y caja diaria con interfaz intuitiva.',
        },
        longDescription: {
            en: 'ArgenPOS simplifies retail operations with an intuitive POS system. Features real-time inventory tracking, multi-payment support, sales analytics, and daily cash reconciliation.',
            es: 'ArgenPOS simplifica las operaciones de comercios con un sistema POS intuitivo. Incluye seguimiento de inventario en tiempo real, soporte multi-pago, analíticas de ventas y conciliación de caja diaria.',
        },
        url: 'https://argenpos.motiona.xyz',
        images: [
            '/projects/argenpos/cover.png',
            '/projects/argenpos/1.png',
            '/projects/argenpos/2.png',
            '/projects/argenpos/3.png',
        ],
        technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
        featured: true,
        status: 'active',
        year: 2026,
    },
    {
        id: '5',
        slug: 'lofistudio',
        title: 'LofiStudio WebApp',
        description: {
            en: 'Digital productivity environment with Lo-Fi music, task management, and Pomodoro-style focus tools.',
            es: 'Entorno digital de productividad con música Lo-Fi, gestión de tareas y herramientas de enfoque tipo Pomodoro.',
        },
        longDescription: {
            en: 'LofiStudio creates the perfect work atmosphere with curated lo-fi music streams, integrated task management, Pomodoro timer, and focus modes to boost your productivity.',
            es: 'LofiStudio crea el ambiente de trabajo perfecto con streams de música lo-fi curada, gestión de tareas integrada, temporizador Pomodoro y modos de enfoque para aumentar tu productividad.',
        },
        url: 'https://lofistudio.motiona.xyz',
        images: [
            '/projects/lofistudio/cover.png',
            '/projects/lofistudio/1.png',
            '/projects/lofistudio/2.png',
            '/projects/lofistudio/3.png',
        ],
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        featured: false,
        status: 'active',
        year: 2025,
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find(p => p.id === id);
}

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
    return projects.filter(p => p.featured);
}
