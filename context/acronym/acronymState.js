import React,{Children, useReducer,useEffect} from 'react'
import AuthContext from './acronymContext'
import authReducer from './acronymReducer'
import firebase from '../../components/firebase'


import {
SET_USER,
SET_LOADING,
SET_RECORDS,
SET_CURRENTRECORD
} from '../types'

export function AuthState(props){
    useEffect(()=>{
   getRecords()
   setUser('user')
    },[])
    const initState={
        user:false,
        loading:true,
        islogged:false,
        records:[],
        currentRecords:{}
     
        
    }

const [state,dispatch]=useReducer(authReducer,initState)

//GET ACR
const setUser=(id)=>{
    const user=[{name:'mubis',phone:'09099899'},{name:'user',phone:'9090'},]
    const curUser=user.filter(user=>user.name==id)
    dispatch({type:SET_USER,payload:curUser})
}
//GET RECORDS
const getRecords=()=>{
    const db=firebase.firestore().collection('records');
    const  allRecords=[]
    db.get().then(snapshot=>{
        snapshot.docs.map(doc=>{
            allRecords.push(doc.data())
            
        })
    }).then(dat=>{
        console.log(allRecords)
        dispatch({type:SET_RECORDS,payload:allRecords})
    })
  
}
//UPLOAD RECORDS
//GET USER
//SET USER
//SET CURRENT
const setCurrent=(current)=>{
    dispatch({type:SET_CURRENTRECORD,payload:current})
}
const setLoading=()=>dispatch({type:SET_LOADING})

return <AuthContext.Provider
value={{
    user:state.user,
    islogged:state.islogged,
    loading:state.loading,
    setUser,
    records:state.records,
    getRecords,
    currentRecords:state.currentRecords,
    setCurrent,
}}
>

    {props.children}
</AuthContext.Provider>

}
