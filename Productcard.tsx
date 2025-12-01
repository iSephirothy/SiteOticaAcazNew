import { ShoppingCart, Heart } from 'lucide-react';
import { Product, ProductImage } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
  image?: ProductImage;
}

export default function ProductCard({ product, image }: ProductCardProps) {
  const hasDiscount = product.discount_percentage > 0;

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={image?.image_url || 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {hasDiscount && (
          <div className="absolute top-4 left-4 bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount_percentage}%
          </div>
        )}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-50">
          <Heart size={20} className="text-rose-600" />
        </button>
        {!product.in_stock && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold">
              Esgotado
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="text-sm text-rose-600 font-semibold mb-1">{product.gender}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-500">{product.material}</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-500">{product.frame_type}</span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                R$ {product.price.toFixed(2)}
              </span>
              {hasDiscount && product.original_price && (
                <span className="text-sm text-gray-400 line-through">
                  R$ {product.original_price.toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">ou 3x sem juros</div>
          </div>
          <button
            disabled={!product.in_stock}
            className="bg-rose-600 text-white p-3 rounded-lg hover:bg-rose-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
