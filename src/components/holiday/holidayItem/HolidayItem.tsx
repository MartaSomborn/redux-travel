import Card from "../../UI/card/Card";

const HolidayItem = (props: any) => {
  return (
    <Card className="max-w-sm m-4 ">
      <li>
        <div>
          <h3 className="font-bold mb-4">{props.name}</h3>
          <img className="h-40 w-full mb-4" src={props.image} />
          <div>{props.description}</div>
        </div>
      </li>
    </Card>
  );
};

export default HolidayItem;
