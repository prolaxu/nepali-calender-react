import React,{useState} from 'react'
import '../css/calender.scss'
import Calender from '../components/bs_calender/calender';
import {
    yearStore,
    monthStore
} from '../store/datastore';

export default function Calenderscreen() {
    yearStore.dispatch({
        type: "Update",
        payload:2078
    });
    monthStore.dispatch({
        type: "Update",
        payload:9
    });
    return (
        <div className="calender-wrapper">
            <h1>नेपाली पात्रो</h1>
            <Calender 
             year={yearStore.getState()}
             month={monthStore.getState()}
             lang="np"
            />
        </div>
    )
}
