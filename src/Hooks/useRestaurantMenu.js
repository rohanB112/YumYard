import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRestaurantMenu } from "../utils/restaurantSlice";
import { useEffect } from "react";

const useRestaurantMenu = () => {
  const dispatch = useDispatch();
  const id = useParams();

  const getRestaurantMenu = async () => {
    const data = await fetch(
      SWIGGY_RESTAURANT_MENU_URL + "&restaurantId=" + id.resId
    );
    const json = await data.json();
    console.log(json);
    dispatch(addRestaurantMenu(json?.data?.cards));
  };

  useEffect(() => {
    getRestaurantMenu();
  }, []);
};

export default useRestaurantMenu;
