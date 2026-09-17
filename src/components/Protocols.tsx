import { protocols } from '../data/services'

export function Protocols() {
  return (
    <section className="section protocols" id="protocoles">
      <div className="shell">
        <div className="head" data-reveal>
          <div>
            <p className="eyebrow">Protocoles signature</p>
            <h2 className="protocols__title head__title">
              Ce qui se passe <em>en cabine</em>
            </h2>
          </div>
          <p className="lede protocols__lede">
            Les durées ci-dessous sont indicatives : elles varient selon la lecture de peau faite le
            jour du rendez-vous.
          </p>
        </div>

        <ul className="protocols__list">
          {protocols.map((protocol, index) => (
            <li className="protocol" key={protocol.name} data-reveal>
              <span className="protocol__num">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="protocol__name">{protocol.name}</h3>
              <p className="protocol__desc">{protocol.desc}</p>
              <span className="protocol__time">{protocol.time}</span>
            </li>
          ))}
        </ul>

        <p className="protocols__note">
          Tarifs communiqués en cabine et par téléphone, après le bilan.
        </p>
      </div>
    </section>
  )
}
