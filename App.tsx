import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import DermoEsthetique from './components/DermoEsthetique';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <DermoEsthetique />
        <Services />
        <WhyUs />
        <Gallery />
        <Reviews />
        <Location />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  );
}

export default App;
