import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import MainLayout from '../layouts/MainLayout';
import SidebarLayout from '../layouts/SidebarLayout';
import { useEffect, useState } from 'react';
import Card from '../components/Cards';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Home = () => {
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const Layout = theme === 'theme2' ? SidebarLayout : MainLayout;

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // fetching data from api

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Trending Products</h1>

      {loading ? (
        <p className="text-gray-600 dark:text-gray-400">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
