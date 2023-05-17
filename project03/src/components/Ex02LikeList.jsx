import { useState } from 'react'

const Ex02LikeList = () => {

    const [num,setNum] = useState(0);
    const [heart,setHeart] = useState('🤍');

    // const like = ()=>{
    //     setNum(num+1)
    //     setHeart('💙')
    // }
    // const dislike = ()=>{
    //     setNum(num-1)
    //     setHeart('🤍')
    // }

    const like = ()=>{
        if(num === 0){
            setNum(1)
            setHeart('💙')
        } else {
            setNum(0)
            setHeart('🤍')
        }
        
    }


  return (
    <div>
        {/* {num === 0?<span onClick={like}>{heart}</span>:<span onClick={dislike}>{heart}</span>} */}
        <span onClick={like}>{heart}</span>
        <span>좋아요 {num}개</span>
    </div>
  )
}

export default Ex02LikeList