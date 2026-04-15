import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Stack from '@/components/Stack';
import Timeline from '@/components/Timeline';
import Academia from '@/components/Academia';
import Awards from '@/components/Awards';
import Fellowships from '@/components/Fellowships';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{
      paddingLeft: 'env(safe-area-inset-left)',
      paddingRight: 'env(safe-area-inset-right)'
    }}>
      <main style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
        <Nav />
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Timeline />
        <Academia />
        <Awards />
        <Fellowships />
        <Footer />
      </main>
    </div>
  );
}
