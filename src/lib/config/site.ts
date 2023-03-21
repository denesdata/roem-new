import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Romanian Economic Monitor',
  subtitle: 'Overview of the Romanian economy: facts and forecasts',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/logo/purple-globe.png',
    name: 'Romanian Economic Monitor',
    status: '',
    bio: 'Overview of the Romanian economy: facts and forecasts'
  },
  themeColor: '#3D4451',
  category: {
    "highlights": {
      "name": "Highlights",
      "description": "",
      "img": "/assets/logo/blue-globe.png"
    },
    "blog": {
      "name": "Blog",
      "description": "",
      "img": "/assets/logo/y.png"
    },
    "modelling": {
      "name": "Modelling & Analysis",
      "description": "",
      "img": "/assets/logo/r.png"
    },
    "explorables": {
      "name": "Explorables",
      "description": "",
      "img": "/assets/logo/v.png"
    },
    "about": {
      "name": "About",
      "description": "",
      "img": "/assets/logo/a.png"
    }
  }
}
