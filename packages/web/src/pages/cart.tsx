import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { RootState } from '../redux/store';
import { removeItem } from '../redux/slices/cartSlice';

const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id));
  };

  // Dummy data for discounts, GST, charges, etc.
  const discounts = 10; // in dollars
  const gst = 5; // in dollars
  const shippingCharge = 7.5; // in dollars
  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalAmount = subTotal - discounts + gst + shippingCharge;

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 border border-red-500 px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span>Subtotal:</span>
                <span>${subTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Discounts:</span>
                <span>-${discounts.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>GST:</span>
                <span>${gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Shipping Charge:</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-2">
              <span className="font-semibold">Payment Methods:</span>
              <div className="flex space-x-2">
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
                  Credit Card
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">PayPal</button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">Stripe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
