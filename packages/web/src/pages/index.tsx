import React from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Link from 'next/link';
import Head from 'next/head';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Header from '../components/Header';

const Home: React.FC<{ newestProducts: any[]; categories: string[] }> = ({ newestProducts = [], categories = [] }) => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const categoryCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
     <Head>
        <title>ABC Store</title>
        <meta name="description" content="Welcome to abc store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="container mx-auto p-4">
        <img
          src="https://via.placeholder.com/1920x400?text=Flash+Sale+Banner"
          alt="Flash Sale Banner"
          className="w-full mb-4"
        />
       
        <div>
          <h3 className="text-2xl mb-2">Newest Products</h3>
          <Slider {...carouselSettings}>
            {newestProducts.map((product: any) => (
              <div key={product.id} className="carousel-item px-4">
                <Link href={`/product/${product.id}`}>
                 
                    <div className="h-40 w-full bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4>{product.title}</h4>
                    <p>${product.price}</p>
                  
                </Link>
              </div>
            ))}
          </Slider>
          <img
          src="https://via.placeholder.com/1920x400?text=Summer+Sale+Banner"
          alt="Flash Sale Banner"
          className="w-full mb-4"
        />
          <h3 className="text-2xl mt-4 mb-2">Categories</h3>
          <Slider {...categoryCarouselSettings}>
            {categories.map((category: string) => (
              <div key={category} className="carousel-item px-4">
                <Link href={`/products/${category}`}>
                  
                    <div className="h-40 w-full bg-gray-100">
                      <img
                        src={`https://via.placeholder.com/400x300?text=${category}`}
                        alt={category}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4>{category}</h4>
                  
                </Link>
              </div>
            ))}
          </Slider>
          
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  try {
    const [newestProductsResponse, categoriesResponse] = await Promise.all([
      axios.get('https://fakestoreapi.com/products?limit=10'),
      axios.get('https://fakestoreapi.com/products/categories'),
    ]);

    const newestProducts = newestProductsResponse.data;
    const categories = categoriesResponse.data;

    return {
      props: { newestProducts, categories },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { newestProducts: [], categories: [] },
    };
  }
}
