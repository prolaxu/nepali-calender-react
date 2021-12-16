import { createStore } from 'redux'
import {CoreReducer} from '../store/reducer.js';
const yearStore = createStore(CoreReducer,2078);
const monthStore = createStore(CoreReducer,8);
const dayStore = createStore(CoreReducer,8);

export {
    yearStore,
    monthStore,
    dayStore
};