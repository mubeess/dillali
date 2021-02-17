import React,{Children, useReducer} from 'react'
import AuthContext from './acronymContext'
import authReducer from './acronymReducer'

import {
SET_USER,
SET_LOADING
} from '../types'

export function AuthState(props){
    const initState={
        isuser:false,
        loading:true,
        islogged:false
     
        
    }

const [state,dispatch]=useReducer(authReducer,initState)

//GET ACR
const setUser=()=>{
    dispatch({type:SET_USER})
}

const setLoading=()=>dispatch({type:SET_LOADING})

return <AuthContext.Provider
value={{
    isuser:state.isuser,
    islogged:state.islogged,
    loading:state.loading,
    setUser
}}
>

    {props.children}
</AuthContext.Provider>

}
