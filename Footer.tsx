import { ShoppingBag, Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="text-rose-500" size={28} />
              <span className="text-xl font-bold text-white">Ótica Elegante</span>
            </div>
            <p className="text-sm leading-relaxed">
              Sua ótica de confiança com os melhores óculos e atendimento personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-rose-500 transition">
                <Instagram size={22} />
              </a>
              <a href="#" className="hover:text-rose-500 transition">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-rose-500 transition">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#promocoes" className="hover:text-rose-500 transition">
                  Promoções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Atendimento</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Como Comprar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Política de Troca
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Envio e Entrega
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500 transition">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-rose-500 mt-0.5 flex-shrink-0" />
                <span>Rua das Flores, 123 - Centro</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-rose-500 flex-shrink-0" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-rose-500 flex-shrink-0" />
                <span>contato@oticaelegante.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; 2025 Ótica Elegante. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
