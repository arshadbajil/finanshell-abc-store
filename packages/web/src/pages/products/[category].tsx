import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductListing: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (category) {
      fetchProductsByCategory();
    }
  }, [category]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="container mx-auto p-4">
          <h2 className="text-3xl mb-4">Products in {category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md animate-pulse">
                <div className="bg-gray-200 h-40 mb-2"></div>
                <div className="h-6 bg-gray-200 w-2/3 mb-2"></div>
                <div className="h-6 bg-gray-200 w-1/3"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Products in {category}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
