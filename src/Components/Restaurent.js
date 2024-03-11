import React from "react";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";

const Restaurent = () => {
  useRestaurantMenu();

  const menuItems = useSelector(
    (store) => store?.restaurantSlice?.restaurantMenu
  );

  const menuCards = menuItems?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return !menuItems ? (
    <p>Loading...</p>
  ) : (
    <div className="md:mx-12 md:my-24 ">
      {menuCards?.map((itemCards) => (
        <>
          {itemCards.card.card.title && (
            <MenuItemList data={itemCards?.card?.card} />
          )}
        </>
      ))}
    </div>
  );
};

export default Restaurent;
