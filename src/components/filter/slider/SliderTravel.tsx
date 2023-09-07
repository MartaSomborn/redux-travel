import { useState } from "react";
import { Slider } from "@mui/material";

const SliderTravel = () => {
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const [value, setValue] = useState<number[]>([0, 100]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    // <div className="w-2/4">
    <div>
      <Slider
        getAriaLabel={() => ""}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
      <div className="flex justify-center gap-5">
        <div>{value[0] + " €"}</div>
        <div>{value[1] + " €"}</div>
      </div>
    </div>
  );
};

export default SliderTravel;
