import { Button, Divider, Input } from 'antd';
import React from 'react'
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
width:50%;
background-color:white;
@media screen and (max-width:586px){
    width:80%;
}
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

export default function About() {
    return (
        <StyledAbout>
          <div className='body'>
              <h1>ABOUT US</h1>
              <h4>
                The idea of this app came as a result of indepth
                and thorogh thought of problems in the real estate management sector
                ranging from distrust between the agents and the vendors.The system
                operates in a transparent way and thus solve the major problem
                of the real estate sector.

              </h4>
              <Divider></Divider>
             
              
        </div> 
        </StyledAbout>
    )
}
