import React,{useContext} from 'react'
import styled from 'styled-components';
import AcronymContext from '../context/acronym/acronymContext' 
import {StarOutlined,UserOutlined,PhoneOutlined,MailOutlined} from '@ant-design/icons'
import Link from 'next/link';
import {useRouter} from 'next/router'
import { Button } from 'antd';

const StyledAd=styled.div`
margin-left:40px;
width:80%;
margin-right:auto;
background-color:#f9f9f9;
margin-bottom:20px;
box-shadow:var(--bs);
min-height:500px;
border-radius:10px;
margin-top:40px;
.picBg{
   border-top-left-radius:10px;
   border-top-right-radius:10px;
h3{
    background-color:#f9f9f9;
    border-radius:10px;
    float:right;
    width:100px;
    height:25px;
    display: flex;
    font-size:10px;
    font-weight:lighter;
    text-align:center;
    position:relative;
    flex-direction:row;
    line-height:1;
    padding:3px;
    color:rgba(0,0,0,0.5);
    margin-top:10px;
    margin-right:20px;
}
svg{
    color:green;
}
}
.mainDet{
    h1{
       width:80%;
       margin-left:20px;
       margin-right:auto;
       font-family:sans-serif;
       font-weight:lighter;
      
    }
    p{
     margin-right:auto;
     margin-left:20px;
     color:rgba(0,0,0,0.5);
    }
    @media screen and (max-width:586px){
          h1,p{
              margin-left:10px;
          } 
        }
       .allDet{
           display: grid;
           grid-template-columns:1fr 1fr;
           .price{
               h2{
                font-family:sans-serif;
                font-weight:lighter;
                color: rgba(0,0,0,0.5);
               }
               @media screen and (max-width:586px){
                   h2{
                       font-size:15px;
                   }
               }
           }

       .moreDet{
            div{
                display:flex;
                flex-direction:row;
                margin-left:20px;
                svg{
                width:20px;
                height:20px;
                color:blue;
            }
            h4{
                color:rgba(0,0,0,0.5);
            }
            }
            div:nth-child(3){
                svg{
                    color:brown;
                }
            }
            div:nth-child(2){
                svg{
                    color:green;
                }
            }
          
            @media screen and (max-width:586px){
             div{
                 margin-left:10px;
                 h4{
                     font-family:sans-serif;
                     font-weight:lighter;
                 }
             }
        }
        }
    }
}
`;

export default function Advert({data}) {
    const router=useRouter()
    const context=useContext(AcronymContext)
    return (
        <StyledAd>
           <div style={{
               background:`linear-gradient(to right, rgba(0, 0, 0, 0.209),rgba(0, 0, 0, 0.309)),url('${data.imgUrl}'),no-repeat,center`,
               height:'200px',
               width:'100%',
               
             
           }} className='picBg'>
            <h3>{data.category}<StarOutlined></StarOutlined><StarOutlined></StarOutlined></h3>
           </div>
           <div className='mainDet'>
               <h1>{data.category} At {data.address}</h1>
               <p>
                   {data.description}
               </p>
        <div className='allDet'>               
            <div className='moreDet'>
                 <div>
                 <UserOutlined></UserOutlined><h4>Agent:{data.mainUser.firstName} {data.mainUser.lastName}</h4>
                 </div>
                 <div>
                <PhoneOutlined></PhoneOutlined><h4>Phone:{data.mainUser.phone}</h4>     
                 </div>
                 <div>
                     <MailOutlined></MailOutlined><h4>Email:{data.mainUser.email}</h4>
                 </div>
                <div className='price'>
             <h2>₦{data.amount}</h2> 
             </div>
             </div>
             
       
         </div>
           </div>
          <Button onClick={()=>{
              context.setCurrent({data:data,user:{name:'mubis'}})
               router.push(`details/${1}`)
          }} style={{
            marginLeft:'25%',
            marginTop:'20px',
            marginBottom:'20px'
          }} type='primary'>More Details</Button>
        </StyledAd>
    )
}
