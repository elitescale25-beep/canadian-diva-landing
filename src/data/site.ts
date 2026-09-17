/* Single source of truth for everything that also appears in index.html's
   LocalBusiness schema — keep the two in step when details change. */

export const site = {
  name: 'Canadian Diva',
  tagline: 'Institut de beauté & dermo-esthétique',
  city: 'Casablanca',
  street: '151 Rue Mimosas',
  postalCode: '20200',
  phoneDisplay: '+212 661 360 971',
  phoneHref: 'tel:+212661360971',
  whatsappHref: 'https://wa.me/212661360971',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=151+Rue+Mimosas%2C+20200+Casablanca',
  instagramHandle: 'canadiandiva_placeholder',
  instagramHref: 'https://www.instagram.com/canadiandiva_placeholder',
  hours: [
    { days: 'Lundi – Vendredi', time: '10h – 19h30' },
    { days: 'Samedi', time: '10h – 18h' },
    { days: 'Dimanche', time: 'Fermé' },
  ],
} as const

export const navLinks = [
  { href: '#soins', label: 'Soins' },
  { href: '#protocoles', label: 'Protocoles' },
  { href: '#methode', label: 'Méthode' },
  { href: '#institut', label: "L'institut" },
] as const
