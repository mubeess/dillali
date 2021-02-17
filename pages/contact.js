import { Button, Divider, Input } from 'antd';
import React,{useState} from 'react'
import styled from 'styled-components'

const StyledAbout=styled.div`
min-width:100%;
min-height:100vh;
background-color:#f9f9f9;
margin-top:100px;
display:flex;
justify-content:center;
align-items:center;
.body{
min-height:500px;
min-width:80%;
background-color:white;
h1{
    text-align:center;
    margin-top:20px;

}
h4{
    text-align:center;
    color:rgba(0,0,0,0.4);
}
}
`;

export default function Contact() {
    const initalValues={
        email:'',
        message:'',
     
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
    }
    return (
        <StyledAbout>
          <div className='body'>
              <h1>Contact Us</h1>
              <h4>Please make your enquiries,complaints and recomendations below!</h4>
              <Divider></Divider>
              <Input value={options.email} onChange={handleChang} style={{
                  width:'80%',
                  marginLeft:'30px',
              }} type='email' placeholder='Email' name='email'></Input>
              <Input.TextArea value={options.message} onChange={handleChang} name='message' placeholder='Message' style={{
                  width:'80%',
                  marginLeft:'30px',
                  marginTop:'20px'
              }} showCount maxLength={100}></Input.TextArea>
              <a href={`mailto:{mubarakibrahim2015@gmail.com}?subject={${options.email}}&body={${options.message}}`}><Button style={{
                  width:'50%',
                  marginLeft:'25%',
                  marginTop:'20px'
              }} type='primary'>Send Message</Button></a>
              
              
        </div> 
        </StyledAbout>
    )
}
