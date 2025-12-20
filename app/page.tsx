import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partnership from '@/components/Partnership';
import LegalDivider from '@/components/LegalDivider';
import Services from '@/components/Services';
import Formations from '@/components/Formations';
import ClientsPartners from '@/components/ClientsPartners';
import CEO from '@/components/CEO';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Partnership />
      <Services />
      <Formations />
      <ClientsPartners />
      <LegalDivider />
      <CEO />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
