import * as React from 'react';
import { useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import nepaliCalendarData from './data.js';
import NepaliNum from './nepalinum.js'
import {
  yearStore
} from '../../store/datastore';

export default function YearSelect({lang,onChange,year}) {
  const handleChange = (event) => {
    yearStore.dispatch({
      type: "Update",
      payload:event.target.value
    })
    onChange(event.target.value);
    console.log(yearStore.getState());
  };
  return (
    <>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={handleChange}
        >
          {Object.keys(nepaliCalendarData).map((item, index) => (
            <MenuItem value={item} key={item} >{ lang==="np"?NepaliNum(item):item}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </>
  );
}