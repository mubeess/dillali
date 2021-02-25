import React,{useContext} from 'react'
import AcronynmCont from '../../context/acronym/acronymContext'
import styled from 'styled-components';
import {MailOutlined, PhoneOutlined, UserOutlined, VerifiedOutlined,AlertOutlined,GlobalOutlined, FacebookFilled, WhatsAppOutlined} from '@ant-design/icons'
import { Button, Divider, Input } from 'antd';
import Link from 'next/link';
import Skeleton from '../../components/Skeleton' 
import { FacebookButton, FacebookCount } from "react-social";
import Head from 'next/head';

const StyledDetatils=styled.div`
margin-top:150px;
width:90%;
min-height:500px;
background-color:#f9f9f9;
margin-left:auto;
margin-right:auto;
border-radius:10px;
display:grid;
grid-template-columns:1fr 1fr;
.picss{
    div{
        display: flex;
        flex-direction:row;
        margin-top:20px;
        h4{
            color:rgba(0,0,0,0.2);
        }
        svg{
        width:100px;
        height:100px;
        color:rgba(0,0,0,0.2);
    }

    } 
    img{
        width:80%;
        height:350px;
        margin-left:auto;
        margin-right:auto;
    }
}
@media screen and (max-width:1000px){
      grid-template-columns:1fr;
      .picss{
          img{
              width:95%;
          }
      }
    }
    .otherDet{
        h1{
            font-family:sans-serif;
            font-weight:lighter;
        }
        .desc{
            margin-top:20px;
            span{
                font-size:18px;
                color:rgba(0,0,0,0.2);
                text-transform:uppercase;

            }
            p{
                color:rgba(0,0,0,0.4);
            }
        }
        .price{
            margin-top:40px;
            h3{
               font-size:40px;
            }
        }
        .otherss{
            margin-top:20px;
            div{
            display:flex;
            flex-direction:row;
            h4{
                margin-left:5px;
                color:rgba(0,0,0,0.4);
            }
            }
        }
        .disclaimer{
            display:flex;
            flex-direction:row;
            margin-top:20px;
            h5{
                font-size:20px;
                font-family:sans-serif;
              
            }
            svg{
                color:lightgreen;
                width:20px;
                height:20px;

            }
        }
        .buts{
            margin-top:20px;
            width:60%;
            margin-left:auto;
            margin-right:auto;
            background-color:rgba(14, 54, 14, 0.74);
            color:white;
            border-radius:10px;
            cursor: pointer;
            a{
            width:100%;
        }
        h3{
            text-align:center;
            color:white;
        
        }
           
           
        }
        
    }
    .socialShare{
        display:flex;
        justify-content:center;
        align-items:center;
        svg{
            height:20px;
            width:20px;
            cursor:pointer;
        }
        

    }
`;
export default function Details() {
    const context=useContext(AcronynmCont);
    const {currentRecords}= context;
    return (
        <StyledDetatils>
            {
                !currentRecords.length&&
                (    
                    <div style={{
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr'
                    }}>
                  <Skeleton></Skeleton>
                    </div>
               
                )
            }

            {
                currentRecords.length&&
                (
                    <>
                    <div className='picss'>
                    <div>
                    <VerifiedOutlined></VerifiedOutlined><h4>More Details</h4>
                    </div>
                    <img src={currentRecords[0].imgUrl} alt='image'></img> 
                </div> 
       
       
                <div className='otherDet'>
       
                    {console.log(currentRecords,'cuuuu')}
                 <h1>{currentRecords[0].category} Available</h1>
            <div className='desc'>
                   <span>Description</span>
                 <p>{currentRecords[0].description}
                </p>
            </div>
            <div className='price'>
              <h3>₦{currentRecords[0].amount}</h3>
            </div>
             <div className='otherss'>
              <div><UserOutlined></UserOutlined><h4>Agent:{currentRecords[0].mainUser.firstName}</h4></div>
              <div><PhoneOutlined></PhoneOutlined><h4>Phone:{currentRecords[0].mainUser.phone}</h4></div>
              <div><MailOutlined></MailOutlined><h4>Mail:{currentRecords[0].mainUser.email}</h4></div>
              <div><GlobalOutlined></GlobalOutlined><h4>Location:{currentRecords[0].lga},{currentRecords[0].mainUser.address}</h4></div>
             </div>
             <div className='disclaimer'>
                 <AlertOutlined></AlertOutlined>
                 <i><h5>The Price Mentioned Above is Negotiable</h5></i>
            </div>
            <div className='buts'>
           <Link href={`tel:${currentRecords[0].mainUser.phone}`}>
             <h3><PhoneOutlined></PhoneOutlined>Place Call</h3>
           </Link>
            </div>
           </div>
           </>
                )
            }
          <Divider>Share</Divider>
          <div className='socialShare'>
            <FacebookButton url='dillali.vercel.app/' appId='738348383527965'>
            <FacebookFilled style={{
                marginRight:'20px',
                color:'blue',
            }}></FacebookFilled>
         </FacebookButton>
          </div>
        </StyledDetatils>
    )
}
