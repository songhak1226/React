import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductDetail = () => {
  let {num} = useParams()
  // console.log('num : ', num);

  // axios를 통해서 한가지 상품에 대한 정보만 가지고 올것
  // 'http://172.30.1.23:8090/shop/' -> 'http://172.30.1.23:8090/shop/p10'

  const[item,setItem] = useState('')

  useEffect(()=>{
    axios.get(`http://172.30.1.23:8090/shop/${num}`)
    .then((res)=>{
      console.log(res.data.product);
      setItem(res.data.product)

    })
  },[])

  return (
    <div>
      <img width='100px' src={"data:image/;base64,"+item.img}></img>
      <p>{item.pname}</p>
      <p>{item.price}</p>

    </div>
  )
}

export default ProductDetail