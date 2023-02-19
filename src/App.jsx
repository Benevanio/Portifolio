
import './App.css';
import Navbar from './sections/navbar/navbar';
import Header from './sections/header/header';
import About from './sections/about/about';
import Services from './sections/services/services';
import Portfolio from './sections/portfolio/portifolio';
import Faqs from './sections/faq/Faq';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Faqs />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
