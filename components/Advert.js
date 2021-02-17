import React from 'react'
import styled from 'styled-components';
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
             }
        }
        }
    }
}
`;

export default function Advert(props) {
    const router=useRouter()
    return (
        <StyledAd>
           <div style={{
               background:`linear-gradient(to right, rgba(0, 0, 0, 0.209),rgba(0, 0, 0, 0.309)),url(/rural.png)`,
               height:'200px',
               width:'100%',
               backgroundRepeat:'no-repeat',
               backgroundSize:'contain',
               backgroundPosition:'center',
             
           }} className='picBg'>
            <h3>FOR SALE<StarOutlined></StarOutlined><StarOutlined></StarOutlined></h3>
           </div>
           <div className='mainDet'>
               <h1>House For Rent At Demsawo(Negotiable)</h1>
               <p>mnahhannahahjaj naha nja hja naja nhajakah ajkakha jamba 
                jakkam makkajau mmakkaha ,anh ndgtjjrnfkks nnabsjgd nmakbxgg.
               </p>
        <div className='allDet'>               
            <div className='moreDet'>
                 <div>
                 <UserOutlined></UserOutlined><h4>Agent Name:Suleiman</h4>
                 </div>
                 <div>
                <PhoneOutlined></PhoneOutlined><h4>Phone:08164942224</h4>     
                 </div>
                 <div>
                     <MailOutlined></MailOutlined><h4>Email:mubis@gmail.com</h4>
                 </div>
             </div>
             <div className='price'>
             <h2>₦200,000</h2> 
             </div>
       
         </div>
           </div>
          <Button onClick={()=>{
               router.push(`details/${1}`)
          }} style={{
            marginLeft:'25%',
            marginTop:'20px',
            marginBottom:'20px'
          }} type='primary'>More Details</Button>
        </StyledAd>
    )
}
