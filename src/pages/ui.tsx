// Import necessary libraries
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline';

// Define the main app component
const UI  = ()  => {
  // Set initial state for the wishlist and cart
  const [wishlist, setWishlist] = useState<any>([]);
  const [cart, setCart] = useState<any>([]);

  // Define function to add product to wishlist
  const addToWishlist = (product: any) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Define function to remove product from wishlist
  const removeFromWishlist = (product: any) => {
    setWishlist(wishlist.filter((item: any) => item !== product));
  };

  // Define function to add product to cart
  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  // Define function to remove product from cart
  const removeFromCart = (product: any) => {
    setCart(cart.filter((item: any) => item !== product));
  };

  // Calculate total price of items in cart
  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item: any) => {
      totalPrice += item.price;
    });
    return totalPrice;
  };

  // Render the app
  return (
    <div>
      <Head>
        <title>E-commerce App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="flex justify-between items-center bg-gray-900 p-6">
        <Link href="/">
          <p className="text-white text-2xl font-bold">E-commerce App</p>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/cart">
            <p className="text-white hover:text-gray-400">
              <ShoppingCartIcon className="h-6 w-6" />
            </p>
          </Link>
          <Link href="/wishlist">
            <p className="text-white hover:text-gray-400">
              <HeartIcon className="h-6 w-6" />
            </p>
          </Link>
        </div>
      </nav>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Products</h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">Product 1</h2>
            <p className="text-gray-700 mb-4">$10</p>
            <div className="flex justify-between items-center">
              <button
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => addToWishlist({ id: 1, name: 'Product 1', price: 10 })}
              >
                Add to Wishlist
              </button>
              <button
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}
              >
                Add to Cart
              </button>
            </div>
          </li>
        </ul>
      </div>
      </div>
  )
}

export default UI;
         
