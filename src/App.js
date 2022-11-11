import './App.css';
import FooterFile from './Components/FooterFile';
import HeroFile from './Components/HeroFile';
import NavbarF from './Components/NavbarFile';
import RecommendFile from './Components/RecommendedFile';
import ScrollToTop from './Components/ScrollTopF/ScrollToTop';
import ServicesFile from './Components/ServicesFile';
import TestimonialsFile from './Components/TestimonialsFile';
import scrollreveal from 'scrollreveal';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'top',
      delay: 500,
      distance: '80px',
      reset: 'true'
    })
    sr.reveal(`
      nav,
      #hero,
      #services,
      #recommended,
      #testimonials,
      footer`,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  
  return (
    <div className="App">
      <NavbarF />
      <HeroFile />
      <ServicesFile />
      <RecommendFile />
      <TestimonialsFile />
      <FooterFile />
      <ScrollToTop />
    </div>
  );
}

export default App;
