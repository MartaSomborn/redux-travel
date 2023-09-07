import { useState } from "react";
import SliderTravel from "./slider/SliderTravel";
import Date from "./date/Date";
import SelectCountry from "./select/SelectCountry";
import AdvancedFilter from "./AdvancedFilter";
import Button from "../UI/button/button/Button";

const FilterTravel = () => {
  const [advancedFilter, setAdvancedFilter] = useState(false);
  return (
    <div className="w-full h-2/3 text-[#4682A9]">
      {/* <div className=" flex justify-center gap-12 "> */}
      <div className="flex flex-col flex-wrap content-center gap-6 my-6">
        <label className="font-bold ">
          Choose the destination for your holiday.
        </label>
        <div className="flex flex-wrap justify-evenly">
          <SelectCountry />
          <Date />
        </div>
        <SliderTravel />
      </div>
      {advancedFilter ? (
        <Button
          className="cursor-pointer"
          onClick={() => setAdvancedFilter(false)}
          title="Hide Advanced Filter"
        ></Button>
      ) : (
        <Button
          className="cursor-pointer"
          onClick={() => setAdvancedFilter(true)}
          title="Advanced Filter"
        ></Button>
      )}
      {advancedFilter && <AdvancedFilter />}
    </div>
  );
};

export default FilterTravel;
