import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, site } from '../data/site'

export function SiteHeader() {
  const [docked, setDocked] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setDocked(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={docked ? 'header header--docked' : 'header'}>
      <div className="shell header__inner">
        <a className="brand" href="#top" aria-label={`${site.name}, retour en haut`}>
          <span className="brand__name">
            Canadian <span>Diva</span>
          </span>
          <span className="brand__meta">Casablanca · Mimosas</span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <a className="nav__link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--solid header__cta" href={site.phoneHref}>
          <span>Prendre rendez-vous</span>
          <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
        </a>

        <button
          className="header__toggle"
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? (
            <X size={19} strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu size={19} strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={open ? 'shell header__drawer header__drawer--open' : 'shell header__drawer'}
        id="menu-mobile"
      >
        {navLinks.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href={site.phoneHref} onClick={() => setOpen(false)}>
          {site.phoneDisplay}
        </a>
      </div>
    </header>
  )
}
