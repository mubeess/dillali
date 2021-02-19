import {EditOutlined, PlusOutlined} from '@ant-design/icons';
import { Input, message, Modal, Select, Upload,Avatar } from 'antd'
import React,{useState} from 'react'
import styled from 'styled-components';

const MainAdForm=styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
h4{
    margin-top:20px;
}

`;


export default function UserForm({visible,handleVisible,data}) {

    const initalValues={
        state:'Adamawa State',
        lga:'',
        category:'',
        amount:0,
        description:'',
        address:'',
        
    }
    const[options,setOptions]=useState(initalValues)
    const [imgFile,setImg]=useState([])
    function handleChang(e) {
        const {name,value}=e.target;
        setOptions({
            ...options,
            [name]:value
        })
       
    }
    function handleSelect(val) {
        setOptions({
            ...options,
            lga:val
        })
    }
    function handleSelectCat(val) {
        setOptions({
            ...options,
            category:val
        })
    }
  function handleImg({fileList}) {
    const maxSize=5*1024*1024;
    if (fileList[0].originFileObj.size>maxSize) {
        return message.error('Image Size Too Large')
    }
   const imgFile=fileList[0].originFileObj
   setImg(imgFile)

  }
    function handleOk() {
       console.log(options,imgFile)
        
    }
    
    return (
        <Modal title='User Details'
        visible={visible}
        onCancel={handleVisible}
        onOk={handleOk}
        
        >
             <Avatar style={{
                backgroundColor:'blue',
                verticalAlign:'middle',
                marginLeft:'50%'
            }}
            size='large'>
                {data.user.firstName.split('')[0].toUpperCase()}{data.user.firstName.split('')[1].toUpperCase()}
            </Avatar>
        <MainAdForm>
            <h4>First Name:</h4>
            <Input style={{
                marginTop:'20px'
            }} type='text' value={data.user.firstName} disabled></Input>

            <h4>Last Name:</h4>
            <Input style={{
                marginTop:'20px'
            }} type='text' value={data.user.lastName} disabled></Input>

          <h4>Email:</h4>
         <Input style={{
                marginTop:'20px'
            }} type='email' value={data.user.email} disabled></Input>

            <h4>Phone:</h4>
            <Input style={{
                marginTop:'20px'
            }} type='number' value={data.user.phone} disabled></Input>
           
        </MainAdForm>
        <h3 style={{
            marginTop:'20px',
            width:'100px',
            backgroundColor:'lightgreen',
            color:'white',
            marginLeft:'auto',
            marginRight:'auto',
            border:'none',
            boxShadow:'var(--bs)',
            borderRadius:'5px'
        }}>Edit Info<EditOutlined></EditOutlined></h3>
        </Modal>
    )
}


