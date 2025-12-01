import { useState } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              className="md:hidden mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center space-x-2">
              <ShoppingBag className="text-rose-600" size={28} />
              <span className="text-xl font-bold text-gray-900">
                Ótica Elegante
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-rose-600 font-medium transition">
              Início
            </a>
            <a href="#promocoes" className="text-gray-700 hover:text-rose-600 font-medium transition">
              Promoções
            </a>
            <a href="#oculos-sol" className="text-gray-700 hover:text-rose-600 font-medium transition">
              Óculos de Sol
            </a>
            <a href="#oculos-grau" className="text-gray-700 hover:text-rose-600 font-medium transition">
              Óculos de Grau
            </a>
            <a href="#infantil" className="text-gray-700 hover:text-rose-600 font-medium transition">
              Infantil
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-rose-600 transition">
              <Search size={22} />
            </button>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition font-medium">
              Contato
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-700 hover:text-rose-600 font-medium transition">
                Início
              </a>
              <a href="#promocoes" className="text-gray-700 hover:text-rose-600 font-medium transition">
                Promoções
              </a>
              <a href="#oculos-sol" className="text-gray-700 hover:text-rose-600 font-medium transition">
                Óculos de Sol
              </a>
              <a href="#oculos-grau" className="text-gray-700 hover:text-rose-600 font-medium transition">
                Óculos de Grau
              </a>
              <a href="#infantil" className="text-gray-700 hover:text-rose-600 font-medium transition">
                Infantil
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
