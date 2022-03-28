import React,{useState} from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Nav from './Nav'
import {Button, Divider, Drawer} from 'antd';
import {MenuOutlined,WhatsAppOutlined,FacebookOutlined,TwitterOutlined,GithubOutlined} from '@ant-design/icons'
import { useRouter } from 'next/router';
const HeaderStyled=styled.header`
display:flex;
flex-direction:row;
position:fixed;
height:100px;
width:100%;
top:0;
background-color:white;
box-shadow:var(--bs);
z-index:10;
.logo{
  width:50%;
  height:100%;
  background-color:transparent;
  display:flex;
  flex-direction:row;
  position:relative;
  img{
    width:100px;
    height:70px;
    margin-top:20px;
    margin-left:50px;
    position:absolute;
    z-index:0;
  }
  h1{
    margin-top:30px;
    margin-right:auto;
    position:absolute;
    margin-left:120px;
    z-index:1;
  }
  h1::first-letter{
    font-size:40px;
    font-weight:lighter;
    color: #1e0efcfb ;
    line-height:1;
    font-family:sans-serif;
  }
  @media screen and (max-width:586px){
    img{
    margin-left:30px;
  }
  h1{
   margin-left:100px;
   
  }
  }
}
.links{
    width:70%;
    height:100px;
    background-color:var(--offwhite);
    display:flex;
    .icon{
    margin-top:auto;
    margin-left:auto;
    margin-bottom:auto;
    margin-right:50px;
    display:none;
    @media screen and (max-width:1000px){
      display:block;
    }
    svg{
      width:30px;
      height:50px;
    }
  }

  }
 
`;
const AsideFoot=styled.div`
padding:10px;
margin-right:auto;
margin-left:auto;
svg{
  width:20px;
  height:20px;
  margin-left:10px;
}
`;
const LinksStyled=styled.div`
display: flex;
flex-direction:column;
span{
  min-width: 100%;
}
span{
  font-size:15px;
  padding:10px;
  border-bottom:1px solid gray;
  font-weight:100;
  text-transform:uppercase;
  min-width: 100%;
}

`;
export default function Header() {
  const [open,setOpen]=useState(false)
  function handleDraw(params) {
    const prev=open;
    setOpen(!prev)
  }
  const router=useRouter();
    return (
       <HeaderStyled>
      <div className='logo'>
        <img src='/animated.gif'></img>
        <h1>illali</h1>
      </div>
      <div className='links'>
      <Nav></Nav>
      <div className='icon'>
        <MenuOutlined onClick={handleDraw}></MenuOutlined>
      </div>
      </div>
      <Drawer
      title='Links'
      placement='left'
      visible={open}
      key='left'
      onClose={handleDraw}
      closable={false}
      footer={
        <AsideFoot>
         <WhatsAppOutlined></WhatsAppOutlined>
         <FacebookOutlined></FacebookOutlined>
         <TwitterOutlined></TwitterOutlined>
         <GithubOutlined></GithubOutlined>
        </AsideFoot>
      }
  
      >
      <LinksStyled>
         
         <span onClick={handleDraw}>
         <Link href='/'>Home</Link>
         </span>
         <span onClick={handleDraw}>
         <Link href='/about'>About Us</Link>
         </span>
         <span onClick={handleDraw}>
         <Link href='/contact'>Contact</Link>
         </span>
        {/* <Link href='/account'>Account</Link> */}
        </LinksStyled>
        {/* <Button onClick={()=>{
          router.push('/sign')
        }} type='primary' style={{
          width:'80%',
          marginTop:'100px'
        }}>Sign Up</Button> */}
      </Drawer>
       </HeaderStyled>
     
    )
}
