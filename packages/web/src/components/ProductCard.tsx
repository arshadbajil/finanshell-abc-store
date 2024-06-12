// packages/web/components/ProductCard.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, price, image, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const product = { id, title, price, quantity: 1 ,image};
    dispatch(addItem(product));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4"><Link href={`/product/${id}`}>
 <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
      <p className="text-gray-600 mb-4">{description}</p>
    </Link>
     
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
