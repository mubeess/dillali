import {
   SET_USER,
    SET_LOADING,
    SET_RECORDS,
    SET_CURRENTRECORD
    } from '../types'

const AcronymReducer= (state,action)=>{
switch(action.type){
case SET_LOADING:
    return{
        ...state,
        loading:true
    }
case SET_USER:
        return{
        ...state,
        user:action.payload

    }
    case SET_RECORDS:
          return{
          ...state,
          records:action.payload
  
      }
    case SET_CURRENTRECORD:
        return{
            ...state,
            currentRecords:action.payload
        }

    default:
    return state;
}

}
export default AcronymReducer;