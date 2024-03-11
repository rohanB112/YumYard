import React from "react";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { CLOUD_IMG_URL } from "../utils/constants";

const CartItemCard = ({ item }) => {
  const { name, price, description, imageId, itemAttribute, variantsV2 } =
    item.card.info;

  return (
    <div>
      <div className=" mx-8 my-12 p-2 flex justify-between">
        <div className=" w-9/12 p-2">
          {itemAttribute?.vegClassifier === "VEG" ? (
            <FaRegDotCircle className="text-green-600" />
          ) : (
            <FaRegCaretSquareUp className="text-red-600" />
          )}

          <p className="text-lg font-semibold">{name}</p>

          {price ? (
            <p className="font-semibold">₹{price / 100}</p>
          ) : (
            <p>{variantsV2?.pricingModels?.[0].price} </p>
          )}

          <p className="font-light">{description}</p>
        </div>

        <div className=" w-56 ">
          <img
            className="object-cover w-48 h-32 rounded-lg"
            alt="img"
            src={CLOUD_IMG_URL + imageId}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
