import React from "react";
import { CLOUD_IMG_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";

const RestaurantCard = ({
  id,
  name,
  avgRating,
  cloudinaryImageId,
  cuisines,
  areaName,
  discount,
  slaString,
}) => {
  // if (discount.header && discount.subHeader) {
  // }
  // const { header } = discount || " ";
  // const { subHeader } = discount || " ";
  // const heading = discount ? discount.header + " " + discount.subHeader : " ";
  return (
    <div className=" hover:bg-gray-200 w-52 md:w-64 mx-auto my-1 py-6 px-1 rounded-sm ">
      <div className="h-20 w-40 md:h-36 md:w-52 rounded-xl mx-4">
        <img
          className="object-cover rounded-xl w-full h-full"
          alt="Restaurant"
          src={CLOUD_IMG_URL + cloudinaryImageId}
        />
      </div>
      <div className="p-3 m-1 text-black font-bold">
        <p className="font-bold">{name}</p>
        <div className=" flex items-center">
          <FaStar className="text-yellow-400 mr-1" />
          <p>{avgRating}</p>
          <LuDot />
          <p>{slaString}</p>
        </div>

        <div className="font-light">
          <div className="flex flex-wrap">
            {cuisines.map(
              (cuisine, index) =>
                index <= 2 && <p className="mr-2">{cuisine}</p>
            )}
          </div>
          <p>{areaName}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
