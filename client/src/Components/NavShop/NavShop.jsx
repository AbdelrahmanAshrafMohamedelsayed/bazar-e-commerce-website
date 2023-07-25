import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import { Former, SelectStyle, Wrapper } from "./NavShop.styled";
// import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
const NavShop = ({ onCountChange }) => {
  const [Num, setNum] = useState(6);
  console.log("KK", Num);
  const handleChange = (event: SelectChangeEvent) => {
    setNum(event.target.value);
    onCountChange(event.target.value);
  };
  return (
    <Wrapper>
      <Former>
        <span>Show:</span>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <SelectStyle
            value={Num}
            onChange={handleChange}
            displayEmpty
            defaultValue={6}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
            <MenuItem value={36}>36</MenuItem>
          </SelectStyle>
        </FormControl>
      </Former>
    </Wrapper>
  );
};

export default NavShop;
