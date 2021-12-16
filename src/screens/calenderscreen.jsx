import React,{useState} from 'react'
import '../css/calender.scss'
import Calender from '../components/bs_calender/calender';
import {
    yearStore,
    monthStore
} from '../store/datastore';

export default function Calenderscreen() {
    return (
        <div>
            <h1>Calender</h1>
            <Calender 
             year={yearStore.getState()}
             month={monthStore.getState()}
             lang="np"
            />
        </div>
    )
}
