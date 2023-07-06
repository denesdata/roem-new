import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'winter',
    text: '⚪ Light'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  search: {
    provider: 'google'
  },
  nav: [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Explore',
      link: '/explore'
    },
    {
      text: 'About us',
      children: [
        {
          text: 'Our purpose & mission',
          link: '/about/mission'
        },
        {
          text: 'Meet the team',
          link: '/about/team'
        },
        {
          text: 'Collaboration Partners',
          link: '/about/partners'
        },
        {
          text: 'Customer Testimonials',
          link: '/about/testimonials'
        }
      ]
    },
    {
      text: 'Green energy',
      children: [
        {
          text: 'Investing in green energy',
          link: '/green-energy/investing'
        },
        {
          text: 'Power from non-recycled waste | The New Renewable',
          link: '/green-energy/new-renewable'
        },
        {
          text: 'Solar',
          link: '/green-energy/solar'
        },
        {
          text: 'Wind',
          link: '/green-energy/wind'
        },
        {
          text: 'Energy Storage',
          link: '/green-energy/energy-storage'
        }
      ]
    },
    {
      text: 'Resources',
      children: [
        {
          text: 'Financial options',
          link: '/resources/financial-options'
        },
        {
          text: 'Research Articles',
          link: '/resources/articles'
        },
        {
          text: 'Case studies',
          link: '/resources/case-studies'
        },
        {
          text: 'Policy Landscape',
          link: '/resources/policy'
        }
      ]
    },
    {
      text: 'News',
      link: '/news'
    },
    {
      text: 'Contact Us',
      link: '/contact'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Feed',
      link: '/atom.xml'
    },
    {
      text: 'Sitemap',
      link: '/sitemap.xml'
    }
  ],
  img: '/assets/pfp.png'
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: 'numeric',
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
