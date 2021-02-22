import {
   SET_USER,
    SET_LOADING,
    SET_RECORDS,
    SET_CURRENTRECORD,
    SET_ISLOGGEDIN
    } from '../types'

const AcronymReducer= (state,action)=>{
switch(action.type){
case SET_LOADING:
    let curr =state.loading
    return{
        ...state,
        loading:!curr
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
        case SET_ISLOGGEDIN:
            const cur=state.isLogged
            return{
                ...state,
                isLogged:!cur
            }

    default:
    return state;
}

}
export default AcronymReducer;