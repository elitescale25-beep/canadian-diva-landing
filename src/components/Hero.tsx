import { ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { site } from '../data/site'

const delay = (ms: number): CSSProperties => ({ '--reveal-delay': `${ms}ms` }) as CSSProperties

const stats = [
  { value: '7', label: 'familles de soins' },
  { value: '1', label: 'adresse, Rue Mimosas' },
  { value: '6 j', label: 'ouvert par semaine' },
]

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="shell hero__grid">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal>
            {site.street} · {site.city}
          </p>

          <h1 className="hero__title" data-reveal style={delay(90)}>
            <span>La peau se lit</span>
            <span>
              avant de se <em>traiter</em>.
            </span>
          </h1>

          <p
            className="lede hero__lede"
            data-reveal
            style={delay(190)}
          >
            {site.tagline} à {site.city}. Diagnostic en cabine, protocoles ajustés au phototype,
            résultats notés d’une séance à l’autre — du soin du visage à l’onglerie, en passant par
            le microneedling et le cheveu.
          </p>

          <div
            className="hero__actions"
            data-reveal
            style={delay(280)}
          >
            <a className="btn btn--solid" href={site.phoneHref}>
              <span>Prendre rendez-vous</span>
              <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#soins">
              Découvrir les soins
            </a>
          </div>
        </div>

        <aside
          className="hero__panel"
          data-reveal
          style={delay(360)}
          aria-label="Informations pratiques"
        >
          <dl>
            <div>
              <dt>Adresse</dt>
              <dd>
                <a href={site.mapsHref} target="_blank" rel="noreferrer">
                  {site.street}
                  <br />
                  {site.postalCode} {site.city}
                </a>
              </dd>
            </div>
            <div>
              <dt>Réservation</dt>
              <dd>
                <a href={site.phoneHref}>{site.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Horaires</dt>
              <dd>
                {site.hours[0].days}
                <br />
                {site.hours[0].time}
              </dd>
            </div>
          </dl>

          <p className="hero__status">
            <i aria-hidden="true" />
            Rendez-vous conseillé, passage possible
          </p>
        </aside>
      </div>

      <div className="shell hero__marquee" data-reveal>
        {stats.map((stat) => (
          <p className="hero__stat" key={stat.label}>
            <b>{stat.value}</b>
            <span>{stat.label}</span>
          </p>
        ))}
      </div>
    </section>
  )
}
