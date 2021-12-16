const yearReducer= function(state, action){
    if(action.type === 'Update'){
     return action.payload
    }
    return state;
}
const monthReducer= function(state, action){
    if(action.type === 'Update'){
     return action.payload
    }
    return state;
}
const dayReducer= function(state, action){
    if(action.type === 'Update'){
     return action.payload
    }
    return state;
}
const CoreReducer= function(state, action){
    if(action.type === 'Update'){
     return action.payload
    }
    return state;
}
export {
    CoreReducer,
    yearReducer,
    monthReducer,
    dayReducer
};