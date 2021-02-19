import React,{useContext} from 'react'
import AcronynmCont from '../../context/acronym/acronymContext'
import styled from 'styled-components';
import {MailOutlined, PhoneOutlined, UserOutlined, VerifiedOutlined,AlertOutlined,GlobalOutlined} from '@ant-design/icons'
import { Button, Input } from 'antd';
import Link from 'next/link';
import Skeleton from '../../components/Skeleton' 

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
`;
export default function Details() {
    const context=useContext(AcronynmCont);
    const {currentRecords}= context;
    return (
        <StyledDetatils>
                    <div style={{
                        display:'grid',
                        gridTemplateColumns:'1fr 1fr'
                    }}>
                      <Skeleton></Skeleton>
                    </div>
                    
        </StyledDetatils>
    )
}
