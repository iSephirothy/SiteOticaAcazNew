import { Tag, Clock, Percent } from 'lucide-react';

export default function PromoSection() {
  return (
    <section id="promocoes" className="py-16 bg-gradient-to-br from-rose-600 to-rose-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <Tag size={20} />
            <span className="font-semibold">Promoções Especiais</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Ofertas Imperdíveis</h2>
          <p className="text-lg text-rose-100 max-w-2xl mx-auto">
            Aproveite descontos exclusivos em óculos selecionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Percent size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Até 50% OFF</h3>
            <p className="text-rose-100 mb-4">
              Em óculos de sol selecionados. Proteção e estilo com preço incrível.
            </p>
            <a href="#produtos" className="inline-flex items-center font-semibold hover:underline">
              Ver produtos
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Tag size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Compre 2, Leve 3</h3>
            <p className="text-rose-100 mb-4">
              Na compra de 2 óculos de grau, ganhe um óculos de sol. Válido para modelos selecionados.
            </p>
            <a href="#produtos" className="inline-flex items-center font-semibold hover:underline">
              Ver produtos
              <span className="ml-2">→</span>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Clock size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3">Frete Grátis</h3>
            <p className="text-rose-100 mb-4">
              Para compras acima de R$ 299. Entrega rápida e segura em todo Brasil.
            </p>
            <a href="#produtos" className="inline-flex items-center font-semibold hover:underline">
              Ver produtos
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
