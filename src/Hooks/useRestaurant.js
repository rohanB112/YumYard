import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addRestaurants } from "../utils/restaurantSlice";
import { SWIGGY_API_URL } from "../utils/constants";

export const useRestaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getResturent();
  }, []);

  const getResturent = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const json = await data.json();
    // console.log(json);
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    dispatch(
      addRestaurants(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      )
    );
  };
};

export default useRestaurant;
