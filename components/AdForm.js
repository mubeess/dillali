import {PlusOutlined} from '@ant-design/icons';
import { Input, message, Modal, Select, Upload } from 'antd'
import React,{useState,useContext, useEffect} from 'react'
import styled from 'styled-components';
import firebase from '../components/firebase'
import AcronymCont from '../context/acronym/acronymContext'
import NaijaState from 'naija-state-local-government'

const MainAdForm=styled.div`
width:100%;
display:grid;
grid-template-columns:1fr 1fr;
h4{
    margin-top:20px;
}

`;


export default function AdForm({visible,handleVisible}) {
    useEffect(()=>{
        console.log(NaijaState.states())
        setState(NaijaState.states())
    },[])
    const [localGovs,setLocalGovs]=useState(['Select Local Gov'])
    const storageRef=firebase.storage().ref();
    const [fileUrl,setFileur]=useState('')
    const [states,setState]=useState(['Select State'])
    const context=useContext(AcronymCont)

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
 async function handleImg({fileList}) {
    const maxSize=5*1024*1024;
    if (fileList[0].originFileObj.size>maxSize) {
        return message.error('Image Size Too Large')
    }
   const imgFile=fileList[0].originFileObj
   setImg(imgFile);
   const name=imgFile.name;
   const fileRef=storageRef.child(name)
   await fileRef.put(imgFile)
       
   setFileur(await fileRef.getDownloadURL())

  }
    async function handleOk() {
    const userEmail=context.user.email;
       const records=firebase.firestore().collection('records');
       if (!fileUrl) {
           return message.warn('please wait for image')
       }
  
       records.add({
           ...options,
           imgUrl:fileUrl,
           createdAt:new Date,
           userMail:userEmail
           
       }).then(ref=>{
       message.success('suceessfully addedd')
       handleVisible()
    //    context.updateRecord({
    //        ...options,
    //        imgUrl:fileUrl,
    //        createdAt:new Date,
    //        userMail:userEmail
    //    })
    // context.getRecords()
    })

        
    }
    function handleStateChange(val) {
     let lgas= NaijaState.lgas(`${val}`)
     setLocalGovs(lgas.lgas)
     setOptions({
         ...options,
         state:val
     })
    
    }
    
    return (
        <Modal title='Add Record'
        visible={visible}
        onCancel={handleVisible}
        onOk={handleOk}
        
        >
        <MainAdForm>
        <h4>State:</h4>
        <Select onChange={handleStateChange} defaultValue='Select State' style={{marginTop:'20px'}}>
            {
                states.map((state)=>(
                    <Select.Option key={state} value={state}>{state}</Select.Option>
                ))
            }
          
        </Select>


        <h4>L.G.A:</h4>
        <Select onChange={handleSelect}  name='lga' style={{marginTop:'20px'}} defaultValue='Select L.G.A'>
            {
                localGovs.map((lga)=>(
                    <Select.Option value={lga}>{lga}</Select.Option>
                    
                ))
            }
            
        </Select>


        <h4>Category:</h4>
        <Select onChange={handleSelectCat} style={{marginTop:'20px'}} defaultValue='Select Category'>
           <Select.Option value='House Rent'>House Rent</Select.Option>
           <Select.Option value='House To Let'>House To Let</Select.Option>
           <Select.Option value='Shop Rent'>Shop Rent</Select.Option>
           <Select.Option value='Shop To Let'>Shop To Let</Select.Option>
           <Select.Option value='Car Rent'>Car Rent</Select.Option>
           <Select.Option value='Car To Let'>Car To Let</Select.Option>
           <Select.Option value='Others'>Others</Select.Option>
        </Select>
        </MainAdForm>
        <Input onChange={handleChang} name='address' style={{marginTop:'20px'}} type='text' placeholder='Address'></Input>
        <Input onChange={handleChang} name='amount' style={{marginTop:'20px'}} type='number' placeholder='Amount in Naira'></Input>
        <Input.TextArea onChange={handleChang} name='description' showCount maxLength={100} style={{marginTop:'20px'}} placeholder='Please Enter A Short Description'></Input.TextArea>
        <Upload 
        listType='picture-card'
        fileList={[]}
        onChange={handleImg}
        accept='.png,.jpg,.jpeg'
        beforeUpload={()=>false}
     
        >
       <PlusOutlined></PlusOutlined>
         Upload Image.
         Max Size is 5mb
        </Upload>
        </Modal>
    )
}


