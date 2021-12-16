import * as React from 'react';
import { useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  monthStore
} from '../../store/datastore';

const english_months_name=["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const nepali_months_name=["बैशाख", "जेठ","असार","श्रावण","भदौ","आश्विन","कार्तिक","मंसिर","पुष","माघ","फाल्गुन","चैत्र"];

export default function MonthSelect({lang,month,onChange}) {
  const handleChange = (event) => {
    monthStore.dispatch({
      type: "Update",
      payload:event.target.value
    })
    onChange(event.target.value);
    console.log(monthStore.getState());
  };

  const processed_months=lang==="np"?nepali_months_name:english_months_name;
  return (
    <>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          {processed_months.map((item, index) => (
            <MenuItem value={index+1} key={index+1}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}