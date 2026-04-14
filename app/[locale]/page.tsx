import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Timeline from '@/components/Timeline';
import Teaching from '@/components/Teaching';
import Publications from '@/components/Publications';
import Conferences from '@/components/Conferences';
import Awards from '@/components/Awards';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ maxWidth: '860px', margin: '0 auto' }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Stack />
      <Timeline />
      <Teaching />
      <Publications />
      <Conferences />
      <Awards />
      <Footer />
    </main>
  );
}
