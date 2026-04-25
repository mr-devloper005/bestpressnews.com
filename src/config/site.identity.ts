export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '4azpfk7bp0',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Bestpressnews',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Global press release distribution & media visibility',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Distribute announcements to journalists, monitor pickup, and grow earned coverage with a modern press room built for communicators and newsrooms.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'bestpressnews.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bestpressnews.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
