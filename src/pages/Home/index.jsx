import Bio from '../../components/Bio';
import Divisao from '../../components/Divisao';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Promessas from '../../components/Promessas';
import Trabalhos from '../../components/Trabalhos';

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Divisao />
        <Promessas />
        <Bio />
        <Trabalhos />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default Home