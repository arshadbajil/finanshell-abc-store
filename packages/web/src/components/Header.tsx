// packages/web/components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Header: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">ABC Store</Link>
        </h1>
        <nav>
          <Link href="/cart">
            <span className="relative">
              Cart
              <span className="ml-2 bg-red-500 rounded-full text-white px-2 py-1">
                {cartItemCount}
              </span>
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
