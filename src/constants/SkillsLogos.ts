export type LogoItem = {
    id: string;
    title: string;
    className?: string;
    position: number
};


export const SKILLS_LOGOS: LogoItem[] = [
    { id: "html5", title: "Logo de HTML5", position: 0 },
    { id: "css3", title: "Logo de CSS3", position: 1 },
    { id: "javascript", title: "Logo de JavaScript", position: 2 },
    { id: "react", title: "Logo de React", position: 3 },
    { id: "tailwind", title: "Logo de Tailwind", position: 4 },
    { id: "astro", title: "Logo de Astro", position: 5 },
    { id: "git", title: "Logo de Git", position: 6 },
    { id: "GitHub", title: "Logo de GitHub", position: 7 },
    { id: "vscode", title: "Logo de VsCode", position: 8 },
    { id: "ubuntu", title: "Logo de Ubuntu", position: 9 },
    { id: "vite", title: "Logo de Vite", position: 10 },
    { id: "npm", title: "Logo de NPM", position: 11 },
    { id: "vitest", title: "Logo de Vitest", position: 12 },
    { id: "typescript", title: "Logo de Typescript", position: 13 },
    { id: "zod", title: "Logo de Zod", position: 14 },
    { id: "netlify", title: "Logo de Netlify", position: 15 },
    { id: "vercel", title: "Logo de Vercel", position: 16 },
    { id: "pnpm", title: "Logo de Pnpm", position: 17 },
    { id: "markdown", title: "Logo de Markdown", position: 18 },
    { id: "bun", title: "Logo de Bun", position: 19 }
];
