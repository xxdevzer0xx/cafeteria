import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Coffee, Leaf, Recycle, Instagram, Facebook, Twitter } from 'lucide-react';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cream">
        {/* Header */}
        <header className="bg-green py-2 px-6 fixed w-full z-50 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <Link to="/" className="h-16 flex items-center">
              <img src="../img/logo_cafe4.png" alt="Logo" className="h-full" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-cream">
            <li><Link to="/" className="hover:text-gold transition-colors">Inicio</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition-colors">Menú</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contacto</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Blog</Link></li>
          </ul>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-green/95 py-4">
            <ul className="flex flex-col items-center space-y-4 text-cream">
              <li><Link to="/" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</Link></li>
              <li><Link to="/menu" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Menú</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
              <li><Link to="/blog" className="hover:text-gold transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
            </ul>
          </div>
        )}

        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-green-dark text-cream py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">KA'FEI</h3>
              <p className="text-cream/80">Energía ancestral en cada sorbo</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Horario</h4>
              <p className="text-cream/80">Lun - Vie: 7:00 - 20:00</p>
              <p className="text-cream/80">Sáb - Dom: 8:00 - 21:00</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <p className="text-cream/80">info@kafei.com</p>
              <p className="text-cream/80">+34 123 456 789</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-cream hover:text-gold transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;