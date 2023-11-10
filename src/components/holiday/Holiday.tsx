import { useState, useEffect } from "react";
import HolidayItem from "./holidayItem/HolidayItem";
import { useDispatch, useSelector } from "react-redux";
import { getPopularDestination } from "../../redux/PopularTravelSlice";

const Holiday = () => {
  const popularDestination = useSelector(
    (state: any) => state.PopularTravel.items
  );

  const holidayValues = Object.values(popularDestination);

  const isLoading = useSelector((state: any) => state.PopularTravel.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularDestination());
  }, []);

  const popularDestinationList = holidayValues.map(
    (holiday: any, index: number) => (
      <HolidayItem
        key={index}
        id={index}
        name={holiday.country}
        description={holiday.description}
        image={holiday.image}
      />
    )
  );

  return (
    <section
      id="magical-holiday"
      className="w-11/12 border-red-600 my-8 mx-auto"
    >
      <ul className="flex flex-wrap justify-center">
        {popularDestinationList}
      </ul>
    </section>
  );
};

export default Holiday;
