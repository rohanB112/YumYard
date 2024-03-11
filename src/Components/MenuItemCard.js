import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { CLOUD_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const { name, price, description, imageId, itemAttribute, variantsV2 } =
    item.card.info;

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className=" mx-8 my-12 p-2 flex justify-between border-b-2">
      <div className=" w-10/12 md:w-9/12 p-2">
        {itemAttribute?.vegClassifier === "VEG" ? (
          <FaRegDotCircle className="text-green-600" />
        ) : (
          <FaRegCaretSquareUp className="text-red-600" />
        )}

        <p className=" md:text-lg font-semibold">{name}</p>

        {price ? (
          <p className="font-semibold">₹{price / 100}</p>
        ) : (
          <p>{variantsV2?.pricingModels?.[0].price} </p>
        )}

        <p className="text-sm md:text-md mt-1 mr-2 font-light">{description}</p>
      </div>

      <div className="relative  text-center w-40 flex justify-center ">
        <img
          className="w-36 h-24 rounded-lg object-cover"
          alt="img"
          src={CLOUD_IMG_URL + imageId}
        />
        <button
          onClick={() => handleAddItem(item)}
          className="absolute top-[62%] left-[50%] -translate-x-[50%] bg-white text-green-600 py-2 px-8 rounded-md my-2 shadow-md border border-gray-200 hover:bg-gray-300"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
