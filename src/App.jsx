import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Models from './components/Models';
import ServicePage from './components/ServicePage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Gallery />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/modeli" element={<Models />} />
            <Route
              path="/pvc-prozori"
              element={<ServicePage title="PVC Prozori" description="Vrhunska toplotna i zvučna izolacija uz minimalno održavanje." />}
            />
            <Route
              path="/alu-stolarija"
              element={<ServicePage title="ALU Stolarija" description="Moderan dizajn, izuzetna čvrstoća i trajnost." />}
            />
            <Route
              path="/ulazna-vrata"
              element={<ServicePage title="Ulazna Vrata" description="Sigurnost na prvom mestu uz vrhunski dizajn." />}
            />
            <Route
              path="/roletne-i-komarnici"
              element={<ServicePage title="Roletne i Komarnici" description="Potpuna zaštita od sunca i insekata." />}
            />
          </Routes>
        </main>
        <Contact />
      </div>
    </Router>
  )
}

export default App;
