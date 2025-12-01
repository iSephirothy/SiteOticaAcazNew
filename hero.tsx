import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
              Novidades 2025
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Encontre o{' '}
              <span className="text-rose-600">óculos perfeito</span> para você
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubra nossa coleção exclusiva de óculos de sol e grau com os melhores
              preços e qualidade garantida. Estilo e proteção em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-rose-700 transition transform hover:scale-105"
              >
                Ver Coleção
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#promocoes"
                className="inline-flex items-center justify-center bg-white text-rose-600 border-2 border-rose-600 px-8 py-4 rounded-lg font-semibold hover:bg-rose-50 transition"
              >
                Promoções
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Produtos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Originais</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Entrega Rápida</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-rose-200 rounded-full blur-3xl opacity-30"></div>
            <img
              src="https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Óculos de sol modernos"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 rounded-full p-3">
                  <svg className="w-6 h-6 text-rose-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Avaliação 4.9</div>
                  <div className="text-sm text-gray-600">Mais de 5.000 clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
