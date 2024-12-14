import { SponserCard } from "@/components/ui/hover-name-card";

export default function SponsorsSectionDemo() {
    const sponsors = [
        {
            name: 'Framer',
            src: 'https://framerusercontent.com/images/t9dDWtLxIvK0eBUuDZFbCWW0Yc.svg',
            href: 'https://example.com'
        },
        { 
            name: 'Tailwind', 
            src: 'https://framerusercontent.com/images/2MLM1UlOYvTkdL65Fo8j01403qs.svg',
            href: 'https://example.com'
        },
        { 
            name: 'Company', 
            src: 'https://framerusercontent.com/images/A8mLJfjzX7KBDtbPoJIUEFNKX6s.png',
            href: 'https://example.com'
        },
        { 
            name: 'Linear', 
            src: 'https://framerusercontent.com/images/N6laZOiPdKqh5XhnoCK9bVjyOc.svg',
            href: 'https://example.com'
        },
        { 
            name: 'Luma', 
            src: 'https://framerusercontent.com/images/fDnRv3RUCf2HQQBbJwPBT1UDE.png',
            href: 'https://example.com'
        },
        { 
            name: 'Liveblocks', 
            src: 'https://framerusercontent.com/images/Cv3srziizWoof4Y0gnGHGmwmlRA.svg',
            href: 'https://example.com'
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {sponsors.map((sponsor) => (
                <SponserCard
                    key={sponsor.name}
                    src={sponsor.src}
                    name={sponsor.name}
                    href={sponsor.href}
                    className="bg-neutral-700"
                />
            ))}
        </div>
    );
}