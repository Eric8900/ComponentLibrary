import { SponserCard } from "@/components/ui/hover-name-card";

export default function ToolsUsed() {
    const sponsors = [
        {
            name: 'NextJS',
            src: '/images/nextjs.svg',
            href: 'https://nextjs.org/'
        },
        {
            name: 'React',
            src: '/images/react.svg',
            href: 'https://react.dev/'
        },
        {
            name: 'Framer Motion',
            src: 'https://framerusercontent.com/images/t9dDWtLxIvK0eBUuDZFbCWW0Yc.svg',
            href: 'https://motion.dev'
        },
        { 
            name: 'Tailwind', 
            src: 'https://framerusercontent.com/images/2MLM1UlOYvTkdL65Fo8j01403qs.svg',
            href: 'https://tailwindcss.com/'
        },
    ];
    return (
        <div className="mt-[10%]">
        <h1 className="font-extrabold text-2xl text-center">made with</h1>
        <div className="flex flex-row justify-center items-center flex-wrap gap-8 p-6">
            {sponsors.map((sponsor) => (
                <SponserCard
                    key={sponsor.name}
                    src={sponsor.src}
                    name={sponsor.name}
                    href={sponsor.href}
                    className="bg-[image:url('/images/mesh-gradient.png')]"
                />
            ))}
        </div>
        </div>
    );
}