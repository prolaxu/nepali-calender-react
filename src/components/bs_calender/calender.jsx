import React from 'react'
import { useState} from 'react';
import NepaliNum from './nepalinum.js'
import nepaliCalendarData from './data.js'
import  { BSToAD}  from "bikram-sambat-js"
import YearSelect from './yearselector'
import MonthSelect from './monthselector'
import {
    yearStore,
    monthStore,
    dayStore
} from '../../store/datastore';

export default function Calender({lang
},props) {
    const [year,setYear]=useState(yearStore.getState());
    const [month,setMonth]=useState(monthStore.getState());
    const [day,setDay]=useState(dayStore.getState());

    const monthdays =nepaliCalendarData[year][month-1];
    const d = new Date(BSToAD(`${year}-${month}-1`));
    const start_day = d.getDay();

    const changeday=(day)=>{
        dayStore.dispatch({
            type: "Update",
            payload:day
          })
        setDay(dayStore.getState());
        console.log(dayStore.getState());
    }
    
    const english_day=(date)=>{
        date=date.split("-");
        return date[2];
    }
    const Boxs=({lang})=>{
        let days = [];
        let priviouse_loop=true;
        for (let i = 1; i <=monthdays ; i++) {
            if(i<=start_day && priviouse_loop){
                days.push(<div className='calender-box privious-month' ></div>);
                if(i===start_day){
                    priviouse_loop=false;
                    i=0;
                }
            }else{
                let active="";
                if(day===i){
                    active="active"
                }
                if(lang==="np"){
                    days.push(<div className={'calender-box '+active} 
                    onClick={()=>{changeday(i)}}
                    >{NepaliNum(i)}
                    <span className='calender-english-day'> {english_day(BSToAD(`${year}-${month}-${i}`))}</span>
                    </div>);
                }else{
                    days.push(<div className={'calender-box '+active} 
                    onClick={()=>{changeday(i)}}
                    >{i}
                    <span className='calender-english-day'> {english_day(BSToAD(`${year}-${month}-${i}`))}</span>
                    </div>);
                }
                
            }
        }
        return days;
    }
    const Days=({lang})=>{
        const nepali_days_name=["आइतबार","सोमबार","मंगलबार","बुधबार","बिहिबार","शुक्रबार","शनिबार"];
        const english_days_name=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let days = [];
        for (let i = 0; i <7 ; i++) {
            if(lang==="np"){
                days.push(
                    <div className='calender-weekday' key={"d"+i}>
                        {nepali_days_name[i]}
                    </div>);
            }else{
                days.push(
                    <div className='calender-weekday' key={"d"+i}>
                        {english_days_name[i]}
                    </div>);    
            }
        }
        return days;
    }


    return (
        <div className="bs_calender">
            <div className="calender-header">
                <div className="calender-year">
                    <YearSelect 
                    lang={lang}
                    year={year}
                    onChange={(value)=>{setYear(value)}}
                    />
                </div>
                <div className="calender-month">
                    <MonthSelect lang={lang}
                        month={month}
                        onChange={(value)=>{setMonth(value)}}
                    />
                </div>
            </div>
            <div className="grid-cal">
                <Days lang={lang}/>
                <Boxs lang={lang}/>
            </div>
        </div>
    )
}
