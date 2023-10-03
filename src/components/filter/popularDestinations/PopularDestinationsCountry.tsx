import { useParams } from "react-router-dom";
import useFetchPopularDestinations from "../../../hooks/useFetchPopularDestinations";

const PopularDestinationsCountry = () => {
  const countryParams = useParams();

  const { popularHolidayDestinations } = useFetchPopularDestinations();

  const selectedCountry = popularHolidayDestinations.find(
    (holiday: any) => holiday.country === countryParams.country
  ) as any;
  console.log("selectedCountry", selectedCountry);
  return (
    <div>
      <h2>{selectedCountry.country}</h2>
    </div>
  );
};

export default PopularDestinationsCountry;
