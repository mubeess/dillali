import { LogoutOutlined, UserOutlined,FileAddOutlined, EditFilled, DeleteFilled, GlobalOutlined,HistoryOutlined} from '@ant-design/icons';
import { Button } from 'antd';
import React,{useState} from 'react'
import styled from 'styled-components'
import AdForm from '../components/AdForm'
import UserAdForm from '../components/UserForm'

const StyledDash=styled.div`
min-width:100%;
min-height:100vh;
background-color:#f9f9f9;
margin-top:100px;
.logDets{
    width:100%;
    height:50px;
    background-color:white;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
    padding:20px;
    h4{
     margin-left:20px;
     cursor: pointer;
    }
}
.welcome{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h1{
        text-align:center;
        margin-top:30px;
    }
    h4{
        text-align:center;
        color:rgba(0,0,0,0.4);
    }
}
.mainDash{
    display:grid;
    grid-template-columns:1fr 1fr;
    width:100%;
    grid-gap:10px;
    .add{
        width:100%;
        height:300px;
        background-color:transparent;
        display:flex;
        justify-content:center;
        align-items:center;
        .addTab{
            width:60%;
            height:60%;
            background-color:var(--gray);
            border-radius:10px;
            cursor: pointer;
            box-shadow:var(--bs);
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            svg{
                width:100px;
                height:100px;
                color:white;
            }
            h4{
                text-align:center;
                color:white;
                font-family:sans-serif;
                font-weight:lighter;
            }

        }
    }
    .list{
        width:100%;
        height:500px;
        overflow-y:scroll;
        background-color:transparent;
        .mainList{
            height:50px;
            width:80%;
            margin-top:20px;
            margin-left:auto;
            margin-right:auto;
            background-color:white;
            border-radius:10px;
            box-shadow:var(--bs);
            border-left:3px solid var(--gray);
            display:flex;
          
            img{
                height:40px;
                width:50px;
                border-radius:50%;
                box-shadow:var(--bs);
                margin-right:10px;
                margin-top:5px;
            }
            h4,p{
                margin-top:5px;
                color:rgba(0,0,0,0.4);
            }
            h3{
                margin-top:5px;
                margin-left:10px;
            }
          
           p{
               margin-left:10px;
           }
           @media screen and (max-width:1000px){
          display: grid;
          grid-template-columns:1fr 1fr 1fr;
          height:150px;
          svg{
              width:20px;
              height:20px;
          }
}
        }
    }
 @media screen and (max-width:586px){
    grid-template-columns:1fr;
}
}
`;

export default function Account() {
    const[visible,setVisible]=useState(false)
    const[userVisible,setUser]=useState(false)
    function handleVisible() {
        const curr=visible;
        setVisible(!curr)
    }
    function handleUser() {
        const curr=userVisible;
        setUser(!curr)
    }
    return (
        <StyledDash>
        <div className='logDets'>
         <h4 onClick={handleUser}>
         Mubarak Ibrahim<UserOutlined></UserOutlined>
         </h4>

         <h4>
         Log Out<LogoutOutlined></LogoutOutlined>
         </h4>
        </div>
        <div className='welcome'>
         <h1>
             Hi, Mubrak Ibrahim - Welcome To Dillali's Dashboard
         </h1>
         <h4>
             you can add, view, edit and delete your uploads here.
        </h4>   
        </div>
        <div className='mainDash'>
          <div className='add'>
             <div className='addTab'>
                <FileAddOutlined></FileAddOutlined>
                <h4>Create New Advert</h4>
                <Button onClick={()=>{
                    handleVisible()
                }}>Create</Button>
             </div>
          </div>
          <div className='list'>
           <div className='mainList'>
             <img src='/rural.png'></img>
             <h4>House Rent At Demsawo<br></br><GlobalOutlined style={{
                 height:'10px',
                 width:'10px'
             }}></GlobalOutlined></h4>
             <h3>200,000</h3>
             <p>2012/09<br></br><HistoryOutlined style={{
                 height:'10px',
                 width:'10px'
             }}></HistoryOutlined></p>
             <EditFilled style={{
                 width:'30px',
               height:'30px',
               marginLeft:'10px',
               cursor: 'pointer'
             }}></EditFilled>
             <DeleteFilled style={{
                 color:'red',
                 width:'30px',
               height:'30px',
               marginLeft:'10px',
               cursor: 'pointer'
             }}></DeleteFilled>
           </div>




           <div className='mainList'>
             <img src='/rural.png'></img>
             <h4>House Rent At Demsawo<br></br><GlobalOutlined style={{
                 height:'10px',
                 width:'10px'
             }}></GlobalOutlined></h4>
             <h3>200,000</h3>
             <p>2012/09<br></br><HistoryOutlined style={{
                 height:'10px',
                 width:'10px'
             }}></HistoryOutlined></p>
             <EditFilled style={{
                 width:'30px',
               height:'30px',
               marginLeft:'10px',
               cursor: 'pointer'
             }}></EditFilled>
             <DeleteFilled style={{
                 color:'red',
                 width:'30px',
                height:'30px',
                marginLeft:'10px',
               cursor: 'pointer'
             }}></DeleteFilled>
           </div>
          </div>
        </div>  
        <AdForm visible={visible} handleVisible={handleVisible}></AdForm>
        <UserAdForm visible={userVisible} handleVisible={handleUser}></UserAdForm>
        </StyledDash>
    )
}
