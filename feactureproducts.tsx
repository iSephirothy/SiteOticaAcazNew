import { useEffect, useState } from 'react';
import { supabase, Product, ProductImage } from '../lib/supabase';
import ProductCard from './ProductCard';
import { Loader2 } from 'lucide-react';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [images, setImages] = useState<Record<string, ProductImage>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select('*')
        .eq('featured', true)
        .limit(6);

      if (productsError) throw productsError;

      if (productsData && productsData.length > 0) {
        setProducts(productsData);

        const { data: imagesData, error: imagesError } = await supabase
          .from('product_images')
          .select('*')
          .in('product_id', productsData.map(p => p.id))
          .order('display_order', { ascending: true });

        if (imagesError) throw imagesError;

        if (imagesData) {
          const imagesMap: Record<string, ProductImage> = {};
          imagesData.forEach(img => {
            if (!imagesMap[img.product_id]) {
              imagesMap[img.product_id] = img;
            }
          });
          setImages(imagesMap);
        }
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-rose-600" size={48} />
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section id="produtos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção especial de óculos com os melhores designs e
            tecnologias para proteção e estilo
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              image={images[product.id]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
