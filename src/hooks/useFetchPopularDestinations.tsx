import { useSelector } from "react-redux";

const useFetchPopularDestinations = () => {
  const popularDestination = useSelector(
    (state: any) => state.PopularTravel.items
  );

  const popularHolidayDestinations = Object.values(popularDestination);

  return { popularHolidayDestinations };
};

export default useFetchPopularDestinations;
