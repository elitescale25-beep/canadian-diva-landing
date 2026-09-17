import { Approach } from './components/Approach'
import { Hero } from './components/Hero'
import { Protocols } from './components/Protocols'
import { Services } from './components/Services'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Visit } from './components/Visit'
import { Voices } from './components/Voices'
import { useReveal } from './hooks/useReveal'

export function App() {
  useReveal()

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>

      <SiteHeader />

      <main id="contenu">
        <Hero />
        <Services />
        <Protocols />
        <Approach />
        <hr className="rule" />
        <Voices />
        <Visit />
      </main>

      <SiteFooter />
    </>
  )
}
