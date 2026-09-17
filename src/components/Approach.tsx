import { steps } from '../data/services'

export function Approach() {
  return (
    <section className="section" id="methode">
      <div className="shell">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow">La méthode</p>
            <h2 className="head__title">
              Trois temps, <em>jamais</em> l’inverse
            </h2>
          </div>
          <p className="lede">
            Aucun soin n’est vendu avant d’être justifié. C’est plus lent la première fois, et plus
            durable ensuite.
          </p>
        </div>

        <div className="approach__grid">
          {steps.map((step) => (
            <article className="step" key={step.num} data-reveal>
              <span className="step__num">{step.num}</span>
              <h3 className="step__name">{step.name}</h3>
              <p className="step__text">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
