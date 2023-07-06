import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'powerforplanet.com/',
  title: 'Power for Planet title',
  subtitle: 'Power for Planet subtitle',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/pfp.png',
    name: 'Power for Planet',
    status: '',
    bio: 'Power for Planet'
  },
  themeColor: '#E7F5F5',
  category: {
    "why": {
      "name": "Why PFP",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/y.png"
    },
    "about": {
      "name": "About",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/a.png"
    },
    "explore": {
      "name": "Explore",
      "description": "This is a very long category description that spans over two lines",
      "img": "/assets/logo/v.png"
    },
    "green-energy": {
      "name": "Green Energy",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/r.png"
    },
    "resources": {
      "name": "Resources",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/blue-globe.png"
    },
    "news": {
      "name": "News",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/y.png"
    },
    "contact": {
      "name": "Contact",
      "description": "Each section can have a custom logo and a short description",
      "img": "/assets/logo/c.png"
    }
  }
}
