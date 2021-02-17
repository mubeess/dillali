import {useReducer,useContext,useState} from 'react'
import Advert from '../components/Advert'
import styled from 'styled-components';
import AuthContext from '../context/acronym/acronymContext'
import { Input, Pagination, Select } from 'antd';
import {HeatMapOutlined,SearchOutlined} from '@ant-design/icons'
const StyledIn=styled.div`
display: grid;
grid-template-columns:1fr 1fr;
margin-top:130px;
.search{
  grid-column:1/3;
  margin-left:40px;
  margin-right:auto;
  margin-bottom:20px;
  display:flex;
  flex-direction:row;
  width:80%;
  svg{
    width:20px;
    height:20px;
  }
}
@media screen and (max-width:1000px){
      grid-template-columns:1fr;
        .search{
  grid-column:1;
   }

 }

`;
export default function Home() {
  const data =useContext(AuthContext)
  const [minVal,setMin]=useState(0)
  const [maxVal,setMax]=useState(6)
  const [curr,setCurr]=useState(1)
  const Arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  const perPage=6;
  const totalPage=Arr.length/perPage;
  function handleVal(val){
    let minIndCal=(val-1)*perPage;
    let MaxCalc=val*perPage;
    setCurr(val),setMin(minIndCal),setMax(MaxCalc),window.scrollTo({top:0,behavior:'smooth'})
  }
  return (
    <StyledIn>
      <div className='search'>
        <Input prefix={<SearchOutlined></SearchOutlined>} type='text' placeholder='Search By L.G.A,Ward or Category'></Input>
      </div>
      {
       Arr.map((data,ind)=>
        ind>=minVal&&ind<maxVal&&(
        <Advert key={ind}>
       </Advert>
        )
      

  )}
<div>
<Pagination onChange={handleVal} current={curr} total={Arr.length} defaultPageSize={perPage}></Pagination>
</div>      
    </StyledIn>
  )
}
