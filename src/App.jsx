import Trabalhos from "./components/Trabalhos";
import Divisao from "./components/Divisao";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Promessas from "./components/Promessas";
import Bio from "./components/Bio";
import Footer from "./components/Footer";

function App() {
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

export default App;
