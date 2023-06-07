import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {

  let{num} = useParams()
  console.log('list : ', list[num]);

  return (
    <div className='list-container'>
      <div className='detail-item'>
        <img width='200px' src={list[num].src}></img>
        <h3>{list[num].title}</h3>
        <p>
          <span>가격 : {list[num].price}원</span>{" "}

          {/* 만약에 배송비가 무료라면 '배송비 무료' 라고 띄워주고
              배송비가 유료라면 '배송비 3000원' 으로 띄워주기
           */}
          {list[num].delivery == 'free' ? <span>배송비 무료</span> : <span>배송비 : {list[num].delivery}원</span>
          }  
        </p>
        <br></br>
        <Link to="/list">목록으로 돌아가기</Link>
      </div>
    </div>
  )
}

export default ProductDetail