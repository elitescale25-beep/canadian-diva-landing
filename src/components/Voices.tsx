import { Star } from 'lucide-react'
import { voices } from '../data/services'

export function Voices() {
  return (
    <section className="section">
      <div className="shell">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow">Elles y reviennent</p>
            <h2 className="head__title">
              Dit par <em>nos clientes</em>
            </h2>
          </div>
        </div>

        <div className="voices__grid">
          {voices.map((voice) => (
            <figure className="voice" key={voice.name} data-reveal>
              <span className="voice__stars" aria-label="Cinq étoiles sur cinq">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={13} strokeWidth={1.4} fill="currentColor" aria-hidden="true" />
                ))}
              </span>
              <blockquote className="voice__quote">« {voice.quote} »</blockquote>
              <figcaption className="voice__who">
                <b>{voice.name}</b>
                {voice.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
