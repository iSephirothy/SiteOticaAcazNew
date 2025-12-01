import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import PromoSection from './components/PromoSection';
import AllProducts from './components/AllProducts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoSection />
      <AllProducts />
      <Footer />
    </div>
  );
}

export default App;
