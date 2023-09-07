import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const AdvancedFilter = () => {
  return (
    <>
      <h3>Food</h3>
      <FormControlLabel control={<Checkbox />} label={"Breakfast"} />
      <FormControlLabel control={<Checkbox />} label={"Supper"} />
      <FormControlLabel control={<Checkbox />} label={"Breakfast + Supper"} />
      <FormControlLabel control={<Checkbox />} label={"All inclusive"} />
      <h3>Hotel facility</h3>
      <FormControlLabel control={<Checkbox />} label={"Swimming pool"} />
      <FormControlLabel control={<Checkbox />} label={"Spa"} />
      <FormControlLabel control={<Checkbox />} label={"Hairdresser"} />
      <FormControlLabel control={<Checkbox />} label={"Gym"} />
      <FormControlLabel control={<Checkbox />} label={"WIFI"} />
      <FormControlLabel control={<Checkbox />} label={"Allowed animals"} />
      <h3>Distance from the sea</h3>
      <FormControlLabel control={<Checkbox />} label={"1 km"} />
      <FormControlLabel control={<Checkbox />} label={"2 km"} />
      <FormControlLabel control={<Checkbox />} label={"5 km"} />
      <FormControlLabel control={<Checkbox />} label={" > 5 km"} />
      <h3>Distance from the city</h3>
      <FormControlLabel control={<Checkbox />} label={"1 km"} />
      <FormControlLabel control={<Checkbox />} label={"2 km"} />
      <FormControlLabel control={<Checkbox />} label={"5 km"} />
      <FormControlLabel control={<Checkbox />} label={" > 5 km"} />
    </>
  );
};

export default AdvancedFilter;
