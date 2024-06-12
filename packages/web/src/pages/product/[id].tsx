import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const ProductDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      const { id, title, price ,image} = product;
      const productData = { id, title, price, quantity: 1 ,image};
      dispatch(addItem(productData));
    }
  };

  if (loading) {
    // Render loading skeleton
    return (
      <>
        <Header />
        <div className="container mx-auto p-4">
          <div className="animate-pulse">
            <div className="flex mb-4">
              <div className="w-1/2 bg-gray-200 h-64"></div>
              <div className="ml-4 flex-1">
                <div className="h-10 bg-gray-200 w-2/3 mb-2"></div>
                <div className="h-8 bg-gray-200 w-1/3 mb-2"></div>
                <div className="h-8 bg-gray-200 w-1/4 mb-4"></div>
                <div className="h-10 bg-blue-500 w-32 text-white rounded-full flex justify-center items-center cursor-pointer">
                  Loading...
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!product) {
    return <div>Error fetching product details.</div>;
  }

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Product Details</h2>
        <div className="flex">
          <img src={product.image} alt={product.title} className="w-1/2" />
          <div className="ml-4">
            <h3 className="text-2xl">{product.title}</h3>
            <p className="text-lg">${product.price}</p>
            <p className="my-4">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
