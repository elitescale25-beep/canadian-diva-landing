import { navLinks, site } from '../data/site'
import { InstagramGlyph } from './InstagramGlyph'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__grid">
          <div>
            <span className="brand">
              <span className="brand__name">
                Canadian <span>Diva</span>
              </span>
              <span className="brand__meta">Casablanca · Mimosas</span>
            </span>
            <p className="footer__tag">
              {site.tagline} à {site.city}. Soins du visage, peeling, microneedling, épilation,
              onglerie, cils et soins capillaires.
            </p>
          </div>

          <div className="footer__col">
            <h4>Naviguer</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Nous joindre</h4>
            <ul>
              <li>
                <a href={site.mapsHref} target="_blank" rel="noreferrer">
                  {site.street}, {site.postalCode} {site.city}
                </a>
              </li>
              <li>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </li>
              <li>
                <a
                  className="footer__social"
                  href={site.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramGlyph />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>{site.street}, {site.postalCode} {site.city}, Maroc</span>
        </div>
      </div>
    </footer>
  )
}
