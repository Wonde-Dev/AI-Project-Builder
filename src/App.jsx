import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <ErrorBoundary>
            <Testimonials />
          </ErrorBoundary>
          <Pricing />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;