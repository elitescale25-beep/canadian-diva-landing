import { services } from '../data/services'

export function Services() {
  return (
    <section className="section" id="soins">
      <div className="shell">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow">Les soins</p>
            <h2 className="head__title">
              Sept familles, <em>un seul</em> diagnostic
            </h2>
          </div>
          <p className="lede">
            Visage, corps, mains et cheveu sont traités dans la même cabine, par la même équipe, sur
            la base du même bilan de départ.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service" key={service.name} data-reveal>
              <span className="service__index">{String(index + 1).padStart(2, '0')}</span>
              <span className="service__arch">
                <service.Icon size={20} strokeWidth={1.4} aria-hidden="true" />
              </span>
              <h3 className="service__name">{service.name}</h3>
              <p className="service__text">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
