export interface SocialLink {
    id: string;
    name: string;
    url: string;
    icon: string;
    username?: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 'github',
        name: 'GitHub',
        url: 'https://github.com/Mateo-Piedra22',
        icon: 'Github',
        username: '@Mateo-Piedra22',
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mateo-piedrabuena/',
        icon: 'Linkedin',
    },
    {
        id: 'twitter',
        name: 'Twitter',
        url: 'https://twitter.com/motiona.ok',
        icon: 'Twitter',
        username: '@motiona.ok',
    },
    {
        id: 'instagram',
        name: 'Instagram',
        url: 'https://instagram.com/motiona.ok',
        icon: 'Instagram',
        username: '@motiona.ok',
    },
];

export function getSocialLink(id: string): SocialLink | undefined {
    return socialLinks.find(link => link.id === id);
}
