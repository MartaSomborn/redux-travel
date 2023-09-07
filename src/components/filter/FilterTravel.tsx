import { useState } from "react";
import SliderTravel from "./slider/SliderTravel";
import Date from "./date/Date";
import SelectCountry from "./select/SelectCountry";
import AdvancedFilter from "./AdvancedFilter";
import Button from "../UI/button/button/Button";

const FilterTravel = () => {
  const [advancedFilter, setAdvancedFilter] = useState(false);
  return (
    <div className="w-full h-2/3 ">
      <label>Select country where you want to spend your holiday</label>
      <div className=" flex justify-center gap-12 ">
        <SelectCountry />
        <SliderTravel />
        <Date />
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
