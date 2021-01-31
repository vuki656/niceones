export type WebsiteType = {
    name: string
    url: string
    color: string
    palette?: string[]
    bannerPath: string
    faviconPath: string
    description: string
}

export const websites: WebsiteType[] = [
    {
        bannerPath: '/websites/banners/segment.png',
        color: '#5cc09b',
        description: 'The leading Customer Data Platform',
        faviconPath: '/websites/favicons/segment.png',
        name: 'Segment',
        palette: ['#5cc09b', '#211e32', '#faf8fd'],
        url: 'https://segment.com/',
    },
    {
        bannerPath: '/websites/banners/strapi.png',
        color: '#8c4bff',
        description: 'Leading open-source headless CMS.',
        faviconPath: '/websites/favicons/strapi.png',
        name: 'Strapi',
        palette: ['#1c1b7e', '#8c4bff', '#fee895', '#fd798c', '#80ebff'],
        url: 'https://strapi.io/',
    },
    {
        bannerPath: '/websites/banners/expo.png',
        color: '#a852dc',
        description: 'Build one project that runs natively on all your users\' devices',
        faviconPath: '/websites/favicons/expo.png',
        name: 'Expo',
        palette: ['#191936', '#0086fc', '#d957d9', '#7f6df3', '#4630eb'],
        url: 'https://expo.io/',
    },
    {
        bannerPath: '/websites/banners/canny.png',
        color: '#969dfa',
        description: 'Build better products with customer feedback',
        faviconPath: '/websites/favicons/canny.png',
        name: 'Canny',
        palette: ['#6dd345', '#f8f8fa', '#969dfa', '#4753c6', '#3d498d'],
        url: 'https://canny.io/',
    },
    {
        bannerPath: '/websites/banners/shuffle.png',
        color: '#3758f9',
        description: 'Create templates in minutes',
        faviconPath: '/websites/favicons/shuffle.png',
        name: 'Shuffle',
        palette: ['#3758f9', '#8d1afc', '#00b0ff', '#00d1b2', '#18b9d1', '#ff8577', '#ffc100', '#f6faff'],
        url: 'https://expo.io/',
    },
]
