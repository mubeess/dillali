import React,{useContext} from 'react'
import styled from 'styled-components'
import {Spin} from 'antd'
import AcronCon from '../context/acronym/acronymContext'

const StyledSpin=styled.div`
display:flex;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
min-height:150vh;
background-color:rgba(0,0,0,0.5);
z-index:30;
align-items:center;
justify-content:center;

`;

export default function Spinner() {
    let context=useContext(AcronCon)
    const isLoading=context.loading;
    return (
    <>
    {
        isLoading?(
            <StyledSpin>
            <Spin size='large'></Spin>
        </StyledSpin>
        ):(null)
    }

    </>
     
    )
}
