import React,{Children, useReducer,useEffect} from 'react'
import AuthContext from './acronymContext'
import authReducer from './acronymReducer'
import firebase from '../../components/firebase'


import {
SET_USER,
SET_LOADING,
SET_RECORDS,
SET_CURRENTRECORD,
SET_ISLOGGEDIN
} from '../types'

export function AuthState(props){
    useEffect(()=>{
   getRecords()
   setUser('user')
    },[])
    const initState={
        user:{},
        loading:true,
        records:[],
        currentRecords:{},
        isLogged:false
     
        
    }

const [state,dispatch]=useReducer(authReducer,initState)

//GET ACR
const setUser=(id={})=>{
    // const user=[{name:'mubis',phone:'09099899'},{name:'user',phone:'9090'},]
    // const curUser=user.filter(user=>user.name==id)
    dispatch({type:SET_USER,payload:id})
}
//GET RECORDS
const getRecords=()=>{
    const db=firebase.firestore().collection('records');
    const user=firebase.firestore().collection('users');
    const  allRecords=[]
    db.get().then(snapshot=>{
        snapshot.docs.map(doc=>{
          const snap=user.doc('383g0RDOpKw08z7wEf6y').get()
          .then(main=>{
              let rowDat=doc.data()
              rowDat.mainUser=main.data();
              allRecords.push(rowDat)
 })
         .then(dt=>{
          dispatch({type:SET_RECORDS,payload:allRecords})
          console.log(allRecords)
         })
             
            
        })
})
  
}
//UPLOAD RECORDS
const setIslogged=()=>{
    dispatch({type:SET_ISLOGGEDIN})
}
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
    loading:state.loading,
    setUser,
    records:state.records,
    getRecords,
    currentRecords:state.currentRecords,
    setCurrent,
    isLogged:state.isLogged,
    setIslogged
}}
>

    {props.children}
</AuthContext.Provider>

}
