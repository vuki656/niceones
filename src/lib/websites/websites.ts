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
        description: 'Customer Data Platform',
        faviconPath: '/websites/favicons/segment.png',
        name: 'Segment',
        palette: ['#5cc09b', '#211e32', '#faf8fd'],
        url: 'https://segment.com/',
    },
    {
        bannerPath: '/websites/banners/strapi.png',
        color: '#8c4bff',
        description: 'Open-source headless CMS',
        faviconPath: '/websites/favicons/strapi.png',
        name: 'Strapi',
        palette: ['#1c1b7e', '#8c4bff', '#fee895', '#fd798c', '#80ebff'],
        url: 'https://strapi.io/',
    },
    {
        bannerPath: '/websites/banners/expo.png',
        color: '#a852dc',
        description: 'Open-source platform for building cross-platform applications',
        faviconPath: '/websites/favicons/expo.png',
        name: 'Expo',
        palette: ['#191936', '#0086fc', '#d957d9', '#7f6df3', '#4630eb'],
        url: 'https://expo.io/',
    },
    {
        bannerPath: '/websites/banners/canny.png',
        color: '#969dfa',
        description: 'Customer feedback platform',
        faviconPath: '/websites/favicons/canny.png',
        name: 'Canny',
        palette: ['#6dd345', '#f8f8fa', '#969dfa', '#4753c6', '#3d498d'],
        url: 'https://canny.io/',
    },
    {
        bannerPath: '/websites/banners/shuffle.png',
        color: '#3758f9',
        description: 'Online UI Editor',
        faviconPath: '/websites/favicons/shuffle.png',
        name: 'Shuffle',
        palette: ['#3758f9', '#8d1afc', '#00b0ff', '#00d1b2', '#18b9d1', '#ff8577', '#ffc100', '#f6faff'],
        url: 'https://shuffle.dev/',
    },
    {
        bannerPath: '/websites/banners/anydo.png',
        color: '#0083ff',
        description: 'Task manager',
        faviconPath: '/websites/favicons/anydo.png',
        name: 'Any.do',
        palette: ['#0083ff', '#ebebeb', '#8c23aa', '#6b66cf', '#ffae26', '#f60350'],
        url: 'https://www.any.do/',
    },
    {
        bannerPath: '/websites/banners/miro.png',
        color: '#4262ff',
        description: 'Collaboration whiteboard',
        faviconPath: '/websites/favicons/miro.png',
        name: 'Miro',
        palette: ['#4262ff', '#9d28b2', '#ff9900', '#3e4eb8', '#009788', '#ff9900', '#ffd02f', '#050038'],
        url: 'https://miro.com/',
    },
    {
        bannerPath: '/websites/banners/stackshare.png',
        color: '#068dfe',
        description: 'Software discovery and management platform',
        faviconPath: '/websites/favicons/stackshare.png',
        name: 'Stackshare',
        palette: ['#068dfe', '#f7f9fa', '#ffa90a', '#ff7e3f'],
        url: 'https://stackshare.io/',
    },
    {
        bannerPath: '/websites/banners/chromatic.png',
        color: '#1ea7fd',
        description: 'UI development collaboration and feedback platform',
        faviconPath: '/websites/favicons/chromatic.png',
        name: 'Chromatic',
        palette: ['#1ea7fd', '#282c35', '#fc521f', '#ffae00', '#37d5d3', '#6f2cac', '#66bf3c', '#b284dc'],
        url: 'https://www.chromatic.com/',
    },
    {
        bannerPath: '/websites/banners/textemall.png',
        color: '#ff4a29',
        description: 'Mass text messaging and automated calling',
        faviconPath: '/websites/favicons/textemall.png',
        name: 'Text Em All',
        palette: ['#ff4a29', '#32dcf3', '#ffffff', '#2e405d', '#ffc531', '#a7261e', '#2da3a8'],
        url: 'https://www.text-em-all.com/',
    },
]
