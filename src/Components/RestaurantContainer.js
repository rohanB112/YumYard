import React from "react";
import RestaurantCard from "./RestaurantCard";
import useRestaurant from "../Hooks/useRestaurant";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const RestaurantContainer = () => {
  useRestaurant();

  const restaurants = useSelector(
    (store) => store?.restaurantSlice?.restaurants
  );

  if (!restaurants) return <ShimmerUI />;

  return (
    <div className="  grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3  md:mx-16 my-4">
      {restaurants?.map((restaurant) => (
        <Link to={"/restaurant/" + restaurant.info.id}>
          <RestaurantCard
            key={restaurant.info.id}
            id={restaurant.info.id}
            name={restaurant.info.name}
            cloudinaryImageId={restaurant.info.cloudinaryImageId}
            cuisines={restaurant.info.cuisines}
            areaName={restaurant.info.areaName}
            avgRating={restaurant.info.avgRating}
            discount={restaurant.info.aggregatedDiscountInfoV3}
            slaString={restaurant.info.sla.slaString}
          />
        </Link>
      ))}
    </div>
  );
};

export default RestaurantContainer;
