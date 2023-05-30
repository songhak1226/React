import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const ProductDetail = () => {
    /* 
    useParams() 
     - url의 파라미터 정보를 가져올 수 있는 React Hook
     - 보통 물품의 고유한 ID값을 설정하는데 적합하다.
     - 한가지 정보만 사용 가능

    a. <Route path="경로이름:파라미터정보"><Route>
    b. 경로에 해당하는 컴포넌트 
        1) import {useParams} from 'react-router-dom'
        2) let {파라미터정보} = useParams()
    */

    let {num} = useParams()
    console.log('게시물 번호 : ', num);

    /*
    useSearchParams()
     - url의 쿼리 값을 가져와서 사용
     - 여러 값을 사용할 수 있다
     ex) 검색기능, 인기상품, 품절상품 ... 일시적인 정보들
    */

    const[query, setQuery] = useSearchParams()
    console.log('query : ', query.get('popular'));

  return (
    <div>
        {num}번째 게시글입니다.
        {query.get('popular' ) && <p>{query.get('popular')}게시물입니다.</p>}
    </div>
  )
}

export default ProductDetail