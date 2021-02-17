import styled from 'styled-components'
import React from 'react'

export default function StyledAside(props) {
    const StyledA=styled.div`
    width:60%;
    height:100vh;
    position:absolute;
    top:0;
    background:#f2f2f296;
    backdrop-filter:blur(10px);
    box-shadow:var(--bs);
    border-right:0.2 solid var(--lightgray);
    transition: all 0.5s;
    transform:translateX(-250px)
    `;
    return (
       <StyledA style={{
           transform:props.open?'translateX(-250px)':''
       }}></StyledA>
    )
}
