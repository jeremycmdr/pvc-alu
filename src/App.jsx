import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
      </main>
      <Contact />
    </div>
  )
}

export default App
