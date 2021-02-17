import {
   SET_USER,
    SET_LOADING
    } from '../types'

export default (state,action)=>{
switch(action.type){
case SET_LOADING:
    return{
        ...state,
        loading:true
    }
case SET_USER:
      let curUser=state.isuser
        return{
        ...state,
        isuser:!curUser

    }

    default:
    return state;
}

}