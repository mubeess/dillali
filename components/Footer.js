import React from 'react'
import styled from 'styled-components'

const StyledFooter=styled.footer`
width:100%;
height:100px;
display:flex;
justify-content:center;
align-items:center;
background-color:var(--gray);
margin-top:20px;
h5{
    color:white;
    text-align:center;
}

`;
export default function Footer() {
    return (
        <StyledFooter>
            <h5>All Rights Reserved 2020@ NUTS Coders</h5>
        </StyledFooter>
    )
}
