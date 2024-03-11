import React from "react";
import Logo from "../assets/food.svg";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cartSlice.items);

  return (
    <div className="bg-gray-100 py-3 px-6 w-full flex items-center justify-between shadow-md">
      <Link to="/">
        <div className="flex items-center">
          <img className="w-12 md:w-16" alt="Logo" src={Logo} />
          <h1 className="font-bold md:text-2xl text-md md:mx-3 ">YumYard</h1>
        </div>
      </Link>

      <div className=" flex">
        <ul className="flex">
          <li className="hidden md:block">
            <Link to="/">
              <div className="flex items-center mx-4 mt-2 hover:text-orange-500">
                <CiSearch />
                <p className="mx-2">Search</p>
              </div>
            </Link>
          </li>
          <li className="hidden md:block">
            <Link to="/">
              <div className="flex items-center mx-4 mt-2 hover:text-orange-500">
                <FaHome />
                <p className="mx-2">Home</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="flex items-center mx-4 mt-2 hover:text-orange-500">
                <IoCartSharp className="text-xl" />
                <p className="mx-2">Cart ({cartItems.length + " items"})</p>
              </div>
            </Link>
          </li>
        </ul>
        <button className="bg-orange-500 hover:bg-orange-700 text-white px-3 py-2 rounded-md ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
