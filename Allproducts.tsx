import { useEffect, useState } from 'react';
import { supabase, Product, ProductImage, Category } from '../lib/supabase';
import ProductCard from './ProductCard';
import { Loader2, SlidersHorizontal } from 'lucide-react';

export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [images, setImages] = useState<Record<string, ProductImage>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [categoriesRes, productsRes] = await Promise.all([
        supabase.from('categories').select('*').order('name'),
        supabase.from('products').select('*').order('created_at', { ascending: false })
      ]);

      if (categoriesRes.error) throw categoriesRes.error;
      if (productsRes.error) throw productsRes.error;

      if (categoriesRes.data) setCategories(categoriesRes.data);
      if (productsRes.data) {
        setProducts(productsRes.data);

        const { data: imagesData, error: imagesError } = await supabase
          .from('product_images')
          .select('*')
          .in('product_id', productsRes.data.map(p => p.id))
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
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category_id === selectedCategory;
    const genderMatch = selectedGender === 'all' || product.gender === selectedGender;
    return categoryMatch && genderMatch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="animate-spin text-rose-600" size={48} />
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Todos os Produtos</h2>
            <p className="text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-700">
              <SlidersHorizontal size={20} />
              <span className="font-medium">Filtros:</span>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="all">Todas Categorias</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="all">Todos os Gêneros</option>
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Unissex">Unissex</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                image={images[product.id]}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
