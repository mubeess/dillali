import React from 'react'
import styled from 'styled-components';
const StyledSkel=styled.div`
@keyframes load{
    0%{
        opacity: 1;
        transform:scale(1);
        background-color:#f9f9f9;
    }
    50%{
        opacity: 0;
        transform:scale(0.3);
        background-color:white;
    }
    100%{
        opacity: 1;
        transform:scale(1);
        background-color:#f9f9f9;
    }
}
width:100%;
height:100vh;
background-color:white;
margin-top:100px;
display:flex;
flex-direction:column;
grid-column:1/3;
justify-content:start;
align-items:center;
perspective:200px;
.skeleton{
    width:60%;
    height:100px;
    background-color:#f9f9f9;
    border-radius:10px;
    margin-bottom:20px;
    animation: load 1s  infinite linear;
  

    div{
        width:50px;
        height:50px;
        margin-left:20px;
        margin-top:10px;
        background-color:lightgray;
        border-radius:50%;
    }
}

`;
export default function Skeleton() {
    return (
        <StyledSkel>
           <div className='skeleton'>
               <div></div>
           </div>
           <div className='skeleton'>
               <div></div>
           </div>
           <div className='skeleton'>
               <div></div>
           </div>
        </StyledSkel>
    )
}
