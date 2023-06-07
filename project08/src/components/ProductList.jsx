import React, { useEffect } from 'react'
import axios from 'axios'
import ProductItem from'./ProductItem'

const ProductList = ({list, setList}) => {
  /* mission
    1) public 안에 두었던 bestlist.json 값을 가지고 올 것
      => axios 이용, useEffect 이용, useState 배열 이용
    2) 가지고 온 데이터를 state값 관리
      => map 함수, props 처리 (index값도 가지고와야 함)
  */

      useEffect(()=>{
        axios.get('http://localhost:3000/bestList.json')
        .then((res)=>{
          console.log('res', res.data.list);
          setList(res.data.list)
        })
      },[])
  return (
    <div className='list-container'>
    {list.map((item,idx)=>(
      <ProductItem key={item.no} item={item} idx={idx}/>
      ))}
    </div>
  )
}

export default ProductList