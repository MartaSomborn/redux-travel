import { Link, useParams } from "react-router-dom";
import useFetchPopularDestinations from "../../../hooks/useFetchPopularDestinations";
import FilterTravel from "../FilterTravel";
import Button from "../../UI/button/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOffer } from "../../../redux/OfferSlice";
import OfferItem from "./OfferItem";

const PopularDestinationsCountry = () => {
  const countryParams = useParams();

  const { popularHolidayDestinations } = useFetchPopularDestinations();

  const countryOffer = useSelector((state: any) => state.Offer.items);

  const offerValues = Object.values(countryOffer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffer());
  }, []);

  const selectedCountry = popularHolidayDestinations.find(
    (holiday: any) => holiday.country === countryParams.country
  ) as any;

  const countryOfferList = offerValues.map((offer: any, index: number) => (
    <OfferItem
      key={index}
      id={index}
      city={offer.city}
      country={offer.country}
      startDate={offer.date.start}
      endDate={offer.date.end}
      distanceFromTheCity={offer.distanceFromTheCity}
      distanceFromTheSea={offer.distanceFromTheSea}
      food={offer.food}
      hotelFacility={offer.hotelFacility}
      price={offer.price}
      image={offer.image}
    />
  ));

  return (
    <div>
      <Link className="absolute left-0" to="/">
        <Button title="Back" />
      </Link>
      <h2>{selectedCountry.country}</h2>
      <FilterTravel />
      {countryOfferList}
    </div>
  );
};

export default PopularDestinationsCountry;
