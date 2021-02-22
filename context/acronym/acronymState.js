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
    const initState={
        user:{},
        loading:false,
        records:[],
        currentRecords:{},
        isLogged:false
     
        
    }
    useEffect(()=>{
   updateRecord()

    },[])

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
          const snap=user.where('email','==',doc.data().userMail).get()
          .then(main=>{
              let rowDat=doc.data()
              main.docs.map(dts=>{
                rowDat.mainUser=dts.data()
                allRecords.push(rowDat)
              })
            //   rowDat.mainUser=main;
            //   allRecords.push(rowDat)
 })
         .then(dt=>{
          dispatch({type:SET_RECORDS,payload:allRecords})
         })
             
            
        })
})
  
}
//UPLOAD RECORDS
const setIslogged=()=>{
    dispatch({type:SET_ISLOGGEDIN})
}
//GET USER
const updateRecord=()=>{
    const db=firebase.firestore().collection('records');
    const user=firebase.firestore().collection('users');
    const  allRecords=[]
    db.onSnapshot(snapshot=>{
        snapshot.docs.map(doc=>{
        user.where('email','==',doc.data().userMail).get()
            .then(main=>{
                let rowDat=doc.data()
                main.docs.map(dts=>{
                  rowDat.mainUser=dts.data()
                  allRecords.push(rowDat)
                })
              //   rowDat.mainUser=main;
              //   allRecords.push(rowDat)
   })
   .then(dt=>{
    dispatch({type:SET_RECORDS,payload:allRecords})
   })
        })
    })
}
//SET USER
//SET CURRENT
const setCurrent=(current)=>{
    dispatch({type:SET_CURRENTRECORD,payload:current})
}

// const setCurrent=(current)=>{
//     dispatch({type:SET_CURRENTRECORD,payload:current})
// }
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
    setIslogged,
    updateRecord,
    setLoading
}}
>

    {props.children}
</AuthContext.Provider>

}
