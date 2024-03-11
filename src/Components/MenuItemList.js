import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MenuItemList = ({ data }) => {
  const { itemCards, title } = data;

  const [isShowItems, setIsShowItems] = useState(true);

  const handleBtnClick = () => {
    setIsShowItems(!isShowItems);
  };

  return (
    itemCards && (
      <div className=" md:mx-32 lg:mx-44 mt-7 border-t-4 border-gray-100">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleBtnClick}
        >
          <h1 className="text-xl font-bold  px-10 py-2 mt-2 ">{title}</h1>
          <button className=" px-4 py-2 text-2xl">
            {isShowItems ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>

        <div>
          {isShowItems &&
            itemCards?.map((item) => (
              <MenuItemCard key={item.card.info.name} item={item} />
            ))}
        </div>
      </div>
    )
  );
};

export default MenuItemList;
