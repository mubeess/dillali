import { FacebookOutlined,GoogleOutlined } from '@ant-design/icons';
import {Divider,Input,Button, message} from 'antd'
import React,{useState,useContext} from 'react'
import firebaseApp from 'firebase/app'
import Link from 'next/link'
import styled from 'styled-components'
import firebase from '../components/firebase'
import AcronymCon from '../context/acronym/acronymContext'
import {useRouter} from 'next/router'
const StyledLogin=styled.div`
margin-top:100px;
background-color:#f9f9f9;
min-width:100%;
min-height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
overflow:hidden;
.loginForm{
    min-width:70%;
    min-height:500px;
    background-color:white;
    h1{
        text-align:center;
        margin-top:10px;
    }
    h4{
        text-align:center;
        color:rgba(0,0,0,0.4);
    }
    .social{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        h4{
            width:100px;
            height:30px;
            background-color:red;
            margin:20px;
            text-align:center;
            border-radius:5px;
            color:white;
            cursor: pointer;
            transition:all 0.6s;
        }
        h4:nth-child(1){
            background-color:lightblue;
        }
        h4:hover{
            transform:scale(1.1)
        }
    }
    .mainForm{
        padding:20px;
    }
}
h4{
    width:100%;
    text-align:center;
}
`;

export default function Login() {
    const context=useContext(AcronymCon)
    const router=useRouter()
    const initalValues={
        email:'',
        password:'',
     
    }
    const[options,setOptions]=useState(initalValues)
    function handleChang(e) {
        const {name,value}=e.target;
        setOptions({
            ...options,
            [name]:value
        })
    }
    function handleSubmit() {
        console.log(options)
        const user=firebase.firestore().collection('users');
        firebase.auth().signInWithEmailAndPassword(options.email,options.password)
        .then(dt=>{
            message.success('Logged In Succesfully')
            context.setIslogged()

        }).then(dt=>{
            const snap=user.where('email','==',`${options.email}`).get()
            .then(dat=>{
               dat.docs.map(dt=>context.setUser(dt.data()));
                router.push('/account')
            })
            .catch(err=>{
                message.warn('errrorrr')
            })
            
        })
        .catch(err=>{
            message.error('Invalid Login')
        })

    }



    function handleGoogleAuth() {
        var provider=new firebaseApp.auth.GoogleAuthProvider()
        const users=firebase.firestore().collection('users');
        firebase.auth()
       .signInWithPopup(provider)
       .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
       var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    if (user.emailVerified) {
        const name=user.displayName;
        const email=user.email;
        const isNew=  result.additionalUserInfo.isNewUser
        if (isNew) {
            let phone=null;
            if (!user.phoneNumber) {
                phone=prompt('enter your phone number');
                }else{
                    phone=user.phoneNumber;
                }

                if ( phone!= null) {
                    console.log(name,email,phone)
                    const firstName=name.split(' ')[0];
                    const secondName=name.split(' ')[1];
                    const mail=email;
                    const phoneNum=phone;
          
                    
                    users.add(
                      {
                          firstName,
                          lastName:secondName,
                          email:mail,
                          phone:phoneNum
                      }
                    ).then(ref=>{
                      message.success('addedd success, click the again to login')
                      router.push('/login')
                    })
                    }
            
        }
       
      if (!isNew) {
        message.success('Logged In Succesfully')
        context.setIslogged()
        users.where('email','==',`${email}`).get()
        .then(dat=>{
           dat.docs.map(dt=>context.setUser(dt.data()));
            router.push('/account')
        })
      }
      
      
    }
    // ...
  }).catch((error) => {
   console.log(error)
  });


  firebase.auth()
  .getRedirectResult()
  .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
  }).catch((error) => {
   console.log(error)
    // ...
  });




    }
    return (
        <StyledLogin>
            <div className='loginForm'>
                <h1>Log In</h1>
                <h4>Log In with your social media accounts</h4>
            <div className='social'>
           <h4><FacebookOutlined></FacebookOutlined>facebook</h4>
           <h4 onClick={handleGoogleAuth}><GoogleOutlined></GoogleOutlined>Google</h4>
          </div>
          <Divider>Or</Divider>
          <div className='mainForm'>
          <Input value={options.email} onChange={handleChang}  style={{
               width:'100%',
               marginTop:'20px',
              
              
           }} type='email' name='email' placeholder='Email'></Input>

<Input value={options.password} onChange={handleChang}  style={{
               width:'100%',
               marginTop:'20px',
              
              
           }} type='password' name='password' placeholder='Password'></Input>
<Button onClick={handleSubmit} style={{
               marginTop:'20px',
               width:'40%',
               marginLeft:'25%',
           }} type='primary'>Log In</Button>

          </div>

            </div>
            <h4>Don't have an account? <Link href='/sign'>SignUp here</Link></h4>
        </StyledLogin>

    )
}
