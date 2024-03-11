import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cartSlice.items);

  let totalAmount = 0;
  cartItems.map((item) => {
    totalAmount += item.card.info.price;
  });
  totalAmount /= 100;
  const discount = totalAmount / 10;
  const deliveryCaharge = totalAmount / 20;

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      {cartItems.length === 0 ? (
        <h1 className="text-xl text-center my-24">
          Cart is empty. Please add items to the cart.
        </h1>
      ) : (
        <div className="flex">
          <div className="w-8/12">
            <div className="mx-8 mt-5  p-3 flex justify-between">
              <h1 className="text-2xl font-bold">Cart</h1>
              <button
                onClick={handleEmptyCart}
                className="bg-red-500 text-white px-3 py-2 text-sm rounded-md mx-5 flex items-center hover:bg-red-800"
              >
                <p>Empty cart </p>
              </button>
            </div>
            {cartItems.map((item) => (
              <CartItemCard item={item} key={item.card.info.name} />
            ))}
          </div>
          <div className="w-4/12 h-4/5  mx-5 py-4 px-8 rounded-lg border">
            <h1 className="text-xl font-bold">Order Summary</h1>
            <div className="flex justify-between my-4 text-lg border-t pt-2">
              <h1>Price ({cartItems.length} items)</h1>
              <h1 className="font-bold">₹ {totalAmount}</h1>
            </div>
            <div className="flex justify-between my-4 text-lg">
              <h1>Discount (10%) </h1>
              <h1 className="font-bold">- ₹ {discount}</h1>
            </div>
            <div className="flex justify-between my-4 text-lg">
              <h1>Delivery Charge (5%) </h1>
              <h1 className="font-bold">+ ₹ {deliveryCaharge}</h1>
            </div>
            <div className="flex justify-between my-4 text-2xl border py-4 border-x-0">
              <h1>Total </h1>
              <h1 className="font-bold ">
                ₹ {totalAmount + deliveryCaharge - discount}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
