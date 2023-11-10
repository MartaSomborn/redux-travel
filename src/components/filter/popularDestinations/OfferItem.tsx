const OfferItem = (props: any) => {
  return (
    <div>
      <h2>{props.country}</h2>
      <h3>{props.city}</h3>
      <img src={props.image} />
      <div>
        {props.startDate} - {props.endDate}
      </div>
      <div>{props.food}</div>
      <div>{props.hotelFacility}</div>
      <div>{props.price}</div>
      <div>{props.distanceFromTheCity}</div>
      <div>{props.distanceFromTheSea}</div>
    </div>
  );
};

export default OfferItem;
