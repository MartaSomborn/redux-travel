import { useState, useEffect } from "react";
import HolidayItem from "./holidayItem/HolidayItem";

const Holiday = () => {
  const [holidayDestination, setHolidayDestination] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchHoliday = async () => {
      const response = await fetch(
        "https://holiday-1ee92-default-rtdb.europe-west1.firebasedatabase.app/Holiday.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();

      const loadedholidayDestination = [];

      for (const key in responseData) {
        loadedholidayDestination.push({
          id: key,
          name: responseData[key].country,
          description: responseData[key].description,
          image: responseData[key].image,
        });
      }
      console.log("loadedMeals", loadedholidayDestination);
      setHolidayDestination(loadedholidayDestination);
      setIsLoading(false);
    };

    fetchHoliday().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = holidayDestination.map((holiday) => (
    <HolidayItem
      key={holiday.id}
      id={holiday.id}
      name={holiday.name}
      description={holiday.description}
      image={holiday.image}
    />
  ));

  return (
    <section className="w-11/12 border-red-600 my-8 mx-auto">
      <ul className="flex flex-wrap justify-center">{mealsList}</ul>
    </section>
  );
};

export default Holiday;
