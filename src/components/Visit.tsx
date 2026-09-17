import { ArrowUpRight, Clock, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site'

export function Visit() {
  return (
    <section className="section" id="institut">
      <div className="shell visit__grid">
        <div data-reveal>
          <p className="eyebrow">L’institut</p>
          <h2 className="head__title">
            Au 151, <em>Rue Mimosas</em>
          </h2>

          <div className="visit__list">
            <div className="visit__item">
              <span className="visit__icon">
                <MapPin size={17} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <div>
                <p className="visit__label">Adresse</p>
                <p className="visit__value">
                  <a href={site.mapsHref} target="_blank" rel="noreferrer">
                    {site.street}, {site.postalCode} {site.city}
                  </a>
                  <small>Quartier des Mimosas · stationnement en voirie</small>
                </p>
              </div>
            </div>

            <div className="visit__item">
              <span className="visit__icon">
                <Phone size={17} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <div>
                <p className="visit__label">Téléphone</p>
                <p className="visit__value">
                  <a href={site.phoneHref}>{site.phoneDisplay}</a>
                  <small>Appel ou WhatsApp pour les rendez-vous</small>
                </p>
              </div>
            </div>

            <div className="visit__item">
              <span className="visit__icon">
                <Clock size={17} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <div>
                <p className="visit__label">Horaires</p>
                <p className="visit__value">
                  {site.hours.map((slot) => (
                    <small key={slot.days}>
                      {slot.days} — {slot.time}
                    </small>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="visit__card" data-reveal>
          <h3>Réserver une séance</h3>
          <p>
            Dites-nous ce qui vous amène : le bilan de peau se cale en trente minutes, souvent dans
            la semaine.
          </p>
          <a className="btn btn--solid" href={site.whatsappHref} target="_blank" rel="noreferrer">
            <span>Écrire sur WhatsApp</span>
            <ArrowUpRight size={15} strokeWidth={1.6} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
