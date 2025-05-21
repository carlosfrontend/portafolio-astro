const classNameGeneric = 'size-8 transition-transform hover:scale-110';

const LOGOS_IDS = {
    github: '#brand-github',
    linkedin: '#brand-linkedin',
    twitter: '#brand-twitter',
    discord: '#brand-discord'
};

const SOCIAL_LINK = {
    github: 'https://github.com/carlosfrontend',
    linkedin: 'https://www.linkedin.com/in/carlosfrontend/',
    twitter: 'https://x.com/CarlosFrontEnd',
    discord: 'https://discord.gg/2wyag2pN6q'
};

const LOGOS = [
    { id: LOGOS_IDS.github, href: SOCIAL_LINK.github, className: classNameGeneric },
    {
        id: LOGOS_IDS.linkedin,
        href: SOCIAL_LINK.linkedin,
        className: classNameGeneric
    },
    { id: LOGOS_IDS.twitter, href: SOCIAL_LINK.twitter, className: classNameGeneric },
    { id: LOGOS_IDS.discord, href: SOCIAL_LINK.discord, className: classNameGeneric }
];

export { LOGOS };