import {useReducer,useContext,useState, useEffect} from 'react'
import Advert from '../components/Advert'
import Skeleton from '../components/Skeleton'
import styled from 'styled-components';
import AuthContext from '../context/acronym/acronymContext'
import { Empty, Input, Pagination, Select } from 'antd';
import {HeatMapOutlined,SearchOutlined} from '@ant-design/icons'
const StyledIn=styled.div`
display: grid;
grid-template-columns:1fr 1fr;
margin-top:100px;
position:relative;
.search{
  grid-column:1/3;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:20px;
  display:flex;
  flex-direction:row;
  width:100%;
  position:fixed;
  background-color:white;
  z-index:9;
 
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
 const datas =useContext(AuthContext)
  const data=datas.records;
  const seen=new Set()
  const [searchVal,setSearch]=useState('')
  const [minVal,setMin]=useState(0)
  const [maxVal,setMax]=useState(6)
  const [curr,setCurr]=useState(1)
  const perPage=6;
  function handleVal(val){
    let minIndCal=(val-1)*perPage;
    let MaxCalc=val*perPage;
    setCurr(val),setMin(minIndCal),setMax(MaxCalc),window.scrollTo({top:0,behavior:'smooth'})
  }
  const filtered=data.filter(dat=>dat.state.toLowerCase().includes(searchVal.toLowerCase())||dat.lga.toLowerCase().includes(searchVal.toLowerCase())||dat.category.toLowerCase().includes(searchVal.toLowerCase()))
  const ultraFilterd=filtered.filter(el=>{
    const duplicate=seen.has(el.imgUrl);
    seen.add(el.imgUrl)
    return !duplicate
  })
  function handleSearch(e) {
    const {value}=e.target;
    setSearch(value)
  }
 
  return (
    <StyledIn>
      <div className='search'>
        <Input onChange={handleSearch} prefix={<SearchOutlined></SearchOutlined>} type='text' placeholder='Search By L.G.A,Ward or Category'></Input>
      </div>
      {ultraFilterd.length&&
       ultraFilterd.map((data,ind)=>
        ind>=minVal&&ind<maxVal&&(
        <Advert data={data} key={ind}>
       </Advert>
        )
      

  )}
  {
    !data.length&&(
      <Skeleton></Skeleton>
    )
  }

{
    !filtered.length&&(
      <div style={{
        gridColumn:'1/3',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100vh'
      }}>
        <Empty></Empty>
      </div>
    )
  }
  
<div>
<Pagination onChange={handleVal} current={curr} total={ultraFilterd.length} defaultPageSize={perPage}></Pagination>
</div>      
    </StyledIn>
  )
}
